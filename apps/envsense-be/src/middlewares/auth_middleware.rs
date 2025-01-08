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
