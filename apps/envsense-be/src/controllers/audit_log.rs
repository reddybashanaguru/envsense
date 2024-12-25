use axum::{Json, extract::Extension};
use crate::{models::audit_log::AuditLog, utils::db::DbConnection};
use std::sync::Arc;
use axum::response::IntoResponse;

pub async fn create_audit_log(
    Extension(db): Extension<Arc<DbConnection>>, Json(audit_log): Json<AuditLog>
) -> impl IntoResponse {
    db.create_audit_log(audit_log).await.unwrap();
    Json("Audit log created".to_string()) // Json impls IntoResponse, so this works
}
