// models.rs

use time::OffsetDateTime;
use time::macros::format_description;
use serde::{Deserialize, Serialize};

#[derive(Debug,Serialize, Deserialize)]
pub struct SubLocation {
    pub id: i32,
    pub name: String,
    pub location_id: i32,
    pub description: Option<String>,
    pub address_line: Option<String>,
    pub city: Option<String>,
    pub state: Option<String>,
    pub country: Option<String>,
    pub postal_code: Option<String>,
    pub contact_number: Option<String>,
    pub created_at: Option<OffsetDateTime>,  // Use OffsetDateTime for created_at
}

impl SubLocation{
    // Function to parse created_at string into OffsetDateTime
    pub fn parse_created_at(created_at_str: &str) -> Result<OffsetDateTime, time::error::Parse> {
        let format = format_description!("[year]-[month]-[day]T[hour]:[minute]:[second]Z");
        OffsetDateTime::parse(created_at_str, &format)
    }
}