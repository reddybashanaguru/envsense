// models.rs

use time::OffsetDateTime;
use time::macros::format_description;
use serde::{Deserialize, Serialize};

#[derive(Debug,Serialize, Deserialize)]
pub struct AuditLog {
    pub id: i32,
    pub user_id: i32,
    pub action: String,
    pub target_table: String,
    pub target_id: i32,
    pub created_at: Option<OffsetDateTime>,  // Use OffsetDateTime for created_at
}

impl AuditLog {
    // Function to parse created_at string into OffsetDateTime
    pub fn parse_created_at(created_at_str: &str) -> Result<OffsetDateTime, time::error::Parse> {
        let format = format_description!("[year]-[month]-[day]T[hour]:[minute]:[second]Z");
        OffsetDateTime::parse(created_at_str, &format)
    }
}
