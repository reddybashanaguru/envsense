use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct DeviceLog {
    pub id: i32,
    pub device_id: i32,
    pub temperature: Option<f64>,
    pub pressure: Option<f64>,
    pub humidity: Option<f64>,
    pub created_at: String,
}
