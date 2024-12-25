use axum::{Router, routing::{post, get}};
use crate::controllers::device::{create_device, get_device};
use std::sync::Arc;
use crate::utils::db::DbConnection;

pub fn device_routes(db: Arc<DbConnection>) -> Router {
    Router::new()
        .route("/device", post(create_device))
        .route("/device/:id", get(get_device))
}
