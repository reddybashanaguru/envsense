use axum::{Json, extract::Extension, response::IntoResponse};
use bcrypt::{hash, verify};
use crate::{models::user::User, utils::jwt};
use std::sync::Arc;
use crate::utils::db::DbConnection;


pub async fn login(
    Extension(db): Extension<Arc<DbConnection>>, Json(user): Json<User>, 
) -> impl IntoResponse {

    match db.fetch_user_by_username(&user.username).await {
        Ok(stored_user) => {
            if verify(&user.password, &stored_user.password).unwrap() {
                let token = jwt::create_jwt(&stored_user);
                Json(token)
            } else {
                Json("Invalid credentials".to_string())
            }
        }
        Err(_) => Json("User not found".to_string()),
    }
}

pub async fn register( Extension(db): Extension<Arc<DbConnection>>, Json(user): Json<User>) -> Json<String> {
    let hashed_password = hash(&user.password, 10).unwrap();
    match db.create_user(&user.username, &user.email, &hashed_password).await {
        Ok(_) => Json("User registered successfully".to_string()),
        Err(_) => Json("Registration failed".to_string()),  // Handle registration failure gracefully
    }
}
