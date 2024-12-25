use axum::{Router, routing::post};
use crate::controllers::report::generate_report;
use std::sync::Arc;
use crate::utils::db::DbConnection;

pub fn report_routes(db: Arc<DbConnection>) -> Router {
    Router::new().route("/report", post(generate_report))
}
