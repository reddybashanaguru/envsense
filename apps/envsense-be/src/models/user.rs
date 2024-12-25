use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use time::{PrimitiveDateTime, OffsetDateTime};

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct User {
    pub id: Option<i32>,
    pub username: String,
    pub email: String, // Non-nullable email
    pub password: String,
    pub role: Option<String>,
    pub created_at: Option<OffsetDateTime>, // Nullable because of default timestamp
    pub updated_at: Option<OffsetDateTime>, // Nullable because of default timestamp
}

impl User {
    // Function to convert OffsetDateTime to PrimitiveDateTime
    pub fn from_offset(offset: OffsetDateTime) -> PrimitiveDateTime {
        PrimitiveDateTime::new(offset.date(), offset.time())
    }

    // Function to convert Option<OffsetDateTime> to Option<PrimitiveDateTime>
    pub fn convert_dates(created_at: Option<OffsetDateTime>, updated_at: Option<OffsetDateTime>) -> (Option<PrimitiveDateTime>, Option<PrimitiveDateTime>) {
        let created_at = created_at.map(|date| User::from_offset(date));
        let updated_at = updated_at.map(|date| User::from_offset(date));
        (created_at, updated_at)
    }
}
