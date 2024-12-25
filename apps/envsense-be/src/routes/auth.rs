use axum::{Router, routing::post, extract::Extension};
use crate::controllers::auth::{login, register};
use std::sync::Arc;
use crate::utils::db::DbConnection;

pub fn auth_routes(db: Arc<DbConnection>) -> Router {
    Router::new()
        .route("/login", post(login))  
        .route("/register", post(register))
        .layer(Extension(db)) 
    }
