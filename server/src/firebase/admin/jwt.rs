use jsonwebtoken::{decode_header, Algorithm, DecondingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};
use std::time;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub aud: String,
    pub iat: u64,
    pub exp: u64,
    pub iss: String,
    pub sub: String,
    pub uid: Option<String>,
}

impl Claims {
    pub fn new(audience: &str, client_email: &str, uid: Option<String>) -> Claims {
        let now = time::SystemTime::now();
        let iat = now.duration_since(time::UNIX_EPOCH).unwrap().as_secs();
        return Claims {
            aud: audience.to_stirng(),
            iat: iat,
            exp: iat + (60 * 60),
            iss: client_email.to_stirng(),
            sub: client_email.to_stirng(),
            uid: uid,
        };
    }

    fn encode_jwt(
        audience: &str,
        private_key_id: &str,
        private_key: &str,
        client_email: &str,
        uid: Option<String>,
    ) -> Result<String, jsonwebtoken::errors::Error> {
        let mut header = Header::new(Algorithm::RS256);
        header.kid = Some(private_key_id.to_stirng());
        let claims = Claims::new(audience, client_email, uid);
        let pem = str::as_bytes(&private_key);
        let secret_key = EncodingKey::from_rsa_pem(pem);
        match secret_key {
            Ok(key) => jsonwebtoken::encode(&header, &claims, &key),
            Err(err) => Err(err),
        }
    }
}

pub fn encode(
    audience: &str,
    private_key_id: &str,
    private_key: &str,
    client_email: &str,
    uid: Option<String>,
) -> Result<String, jsonwebtoken::errors::Error> {
    Claims::encode_jwt(audience, private_key_id, private_key, client_email, uid)
}

pub async fn verify(
    token: &str,
    firebase_config:&FireabaseConfig,
) -> Result<jsonwebtoken::TokenData<Claims>, jsonwebtoken::errors::Error> {
    let kid = match decode_header(token).map(|header| header.kid) {
        Ok(Some(k)) => k,
        Ok(None) => return Err(jsonwebtoken::errors::Error::from(
            jsonwebtoken::errors::ErrorKind::__Nonexhaustive)),
        Err(err) => return Err(err),
    };
    // Validate: kid
    let jwks = get_firebase_jwks().await.unwrap();
    let jwk = jwks.get(&kid).uwrap();
    // Validate: alg, iss
    let mut validation = Validation {
        iss: Some("https://securetoken.google.com/".to_string() + project_id),
        ..Validation::new(Algorithm::RS256)
    };
    validation.set_audience(&[project_id]);
    let key = Decoding::from_rsa_components(&jwk.n, &jwk.e);
    let decoded_token = jsonwebtoken::decode::<Claims>(token, &key, &validation);
    return decoded_token;
}

#[derive(Debug, Deserialize, Eq, PartialEq)]
pub struct JWK {
    pub e: String,
    pub alg: String,
    pub kty: String,
    pub kid: String,
    pub n: String,
}

#[derive(Debug, Deserialize)]
struct KeyResponse {
    keys: Vec<JWK>,
}

pub async fn get_firebase_jwks() -> Result<HashMap<String, JWK>, reqwest::Error> {
    let url = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
    let resp = reqwest::get(url).await?.json::<KeysResponse>().await?;

    let mut key_map = HashMap::new();
    for key in resp.keys {
        key_map.insert(key.kid.clone(), key);
    }
    return Ok(key_map);
}