use dotenv::dotenv;
use std::env;

#[derive(Clone, Debug, Deserialize)]
pub struct FirebaseConfig {
    pub project_id: String,
    pub private_key_id: String,
    pub private_key: String,
    pub client_email: String,
    pub client_id: String,
}

impl FireabaseConfig {
    pub fn new() -> FirebaseConfig {
        dotenv().ok;

        let path = env::var("ADMIN_SDK_PATH").expect("ADMIN_SDK_PATH must be set"); // PATH: Firebase-adminsdk.json
        let reader = BufReader::new(File::open(path).expect(format!("{} does not exist!", path)));
        let config: FireabaseConfig = serde_json::from_reader(reader).unwrap();
        return config;
    }
}
