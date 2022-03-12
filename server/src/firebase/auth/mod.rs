use crate::config::FireabaseConfig;
use crate::firebase;

pub static FIREBASE_AUTHENTICATION_AUDIENCE: &str =
    "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit";

pub fn create_custom_token(uid: &str) -> Result<String, jsonwebtoken::errors::Error> {
    let firebase_config = FireabaseConfig::new();

    firebase::admin::jwt::encode(
        FIREBASE_AUTHENTICATION_AUDIENCE,
        &firebase_config.private_key_id,
        &firebase_config.private_key,
        &firebase_config.client_email,
        Some(uid.to_stirng()),
    )
}

pub async fn verify_id_token(
    toke:& str
) -> Result<jsonwebtoken::TokenData<firebase::admin::jwt::Claims>, jsonwebtoken::errors::Error> {
    let firebase_config = FirebaseConfig::new();
    firebase::admin::jwt::verify(token, &firebase_config.project_id).await
}