use axum::extract::Json;
// use crate::models:: device::{self, Device};
use crate::models::device::Device;
use crate::models:: device_log::DeviceLog;
use crate::utils::db::DbConnection;
use axum::Extension;
use std::sync::Arc;


// pub async fn create_device(Json(device): Json<Device>) -> Json<String> {
//     // Insert device into DB logic (omitted for brevity)
//     Json("Device created successfully".to_string())
// }

pub async fn create_device(Extension(db): Extension<Arc<DbConnection>>, Json(device): Json<Device>) -> Json<String> {
    // db.create_device(&device.name, &device.type_, &device.status, &device.location).await.unwrap();
    Json("Device created successfully".to_string())
}

pub async fn get_device( Extension(db): Extension<Arc<DbConnection>>,Json(device_id): Json<i32>) -> Json<Device> {
    let device = Device {
        id: 0,
        name: "".to_string(),
        type_: "".to_string(),
        status: "".to_string(),
        location: "".to_string(),
    };
    // let device = db.fetch_device(device_id).await.unwrap();
    Json(device)
}

// pub async fn get_device(Json(device_id): Json<i32>) -> Json<Device> {
//     // Fetch device from DB
//     Json(Device {
//         id: device_id,
//         name: "Temperature Sensor".to_string(),
//         type_: "Temperature".to_string(),
//         status: "active".to_string(),
//         location: "Lab 1".to_string(),
//     })
// }

pub async fn get_device_logs(Json(device_id): Json<i32>) -> Json<Vec<DeviceLog>> {
    // Fetch logs for a device
    Json(vec![DeviceLog {
        id: 1,
        device_id,
        temperature: Some(22.5),
        pressure: Some(101.3),
        humidity: Some(50.0),
        created_at: "2024-12-23T10:00:00Z".to_string(),
    }])
}
