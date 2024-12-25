// use axum::{extract::Json, response::Json};
// use crate::models::Report;

use axum::{Json, extract::Extension};
use crate::{models::report::Report, utils::db::DbConnection};
use std::sync::Arc;

// pub async fn generate_report(Json(device_id): Json<i32>) -> Json<Report> {
//     // Report generation logic
//     Json(Report {
//         id: 1,
//         report_type: "Daily".to_string(),
//         device_id,
//         generated_at: "2024-12-23T12:00:00Z".to_string(),
//         content: "Sample Report Content".to_string(),
//     })
// }

pub async fn generate_report(Extension(db): Extension<Arc<DbConnection>>, Json(device_id): Json<i32>) -> Json<Report> {
    let report = Report {
        id: 0,
        report_type: "".to_string(),
        device_id,
        generated_at: "".to_string(),
        content: "".to_string(),
    };
    // let report = db.generate_report_for_device(device_id).await.unwrap();
    Json(report)
}
