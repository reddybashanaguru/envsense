use axum::{Router, routing::post ,extract::Extension};
use crate::controllers::audit_log:: create_audit_log;
use std::sync::Arc;
use crate::utils::db::DbConnection;

pub fn audit_log_routes(db: Arc<DbConnection>) -> Router {
    Router::new().route("/audit_log", post(create_audit_log)
             .layer(Extension(db)) )
}
