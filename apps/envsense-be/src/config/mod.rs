use std::env;

pub fn init_config() {
    dotenv::dotenv().ok();
}

pub fn get_db_url() -> String {
    env::var("DATABASE_URL").expect("DATABASE_URL must be set")
}

pub fn get_jwt_secret() -> String {
    env::var("JWT_SECRET").expect("JWT_SECRET must be set")
}
