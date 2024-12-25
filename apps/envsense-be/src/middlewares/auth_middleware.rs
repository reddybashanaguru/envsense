// use axum::{response::IntoResponse, http::{Request, StatusCode}};
// use jsonwebtoken::{decode, DecodingKey, Validation};
// use crate::utils::jwt::{Claims};

// pub async fn auth_middleware<B>(req: Request<B>) -> Result<Request<B>, impl IntoResponse> {
//     let token = req.headers().get("Authorization").and_then(|header| header.to_str().ok());
//     if let Some(token) = token {
//         let secret = crate::config::get_jwt_secret().as_bytes();
//         match decode::<Claims>(token, &DecodingKey::from_secret(secret), &Validation::default()) {
//             Ok(_) => Ok(req),
//             Err(_) => Err(StatusCode::UNAUTHORIZED.into_response()),
//         }
//     } else {
//         Err(StatusCode::UNAUTHORIZED.into_response())
//     }
// }


use axum::{http::Request, response::IntoResponse, middleware::Next};
// use jsonwebtoken::{decode, DecodingKey, Validation};
use crate::utils::jwt::decode_jwt;
use axum::http::StatusCode;
use axum::body::Body;

pub async fn auth_middleware<B>(req: Request<Body>, next: Next) -> impl IntoResponse {
    let token = req.headers().get("Authorization").and_then(|h| h.to_str().ok());
    if let Some(token) = token {
        match decode_jwt(token) {
            Ok(_) => next.run(req).await,
            Err(_) => (StatusCode::UNAUTHORIZED, "Invalid Token").into_response(),
        }
    } else {
        (StatusCode::UNAUTHORIZED, "Authorization required").into_response()
    }
}
