use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Report {
    pub id: i32,
    pub report_type: String,
    pub device_id: i32,
    pub generated_at: String,
    pub content: String,
}
