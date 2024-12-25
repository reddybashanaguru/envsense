use jsonwebtoken::{encode, decode, Header, EncodingKey, DecodingKey, Validation};
use serde::{Serialize, Deserialize};
use crate::models ::user::User;
use crate:: config::get_jwt_secret;

#[derive(Serialize, Deserialize)]
pub struct Claims {
    pub sub: String,
    pub exp: usize,
}

pub fn create_jwt(user: &User) -> String {
    let claims = Claims {
        sub: user.username.clone(),
        exp: 10000000000, // You can adjust expiration time
    };

    let encoding_key = EncodingKey::from_secret(get_jwt_secret().as_bytes());
    encode(&Header::default(), &claims, &encoding_key).unwrap()
}

pub fn decode_jwt(token: &str) -> Result<Claims, jsonwebtoken::errors::Error> {
    let decoding_key = DecodingKey::from_secret(get_jwt_secret().as_bytes());
    let validation = Validation::default();
    decode::<Claims>(token, &decoding_key, &validation).map(|data| data.claims)
}
