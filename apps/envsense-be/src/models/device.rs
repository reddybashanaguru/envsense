use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Device {
    pub id: i32,
    pub name: String,
    pub type_: String,
    pub status: String, // active, inactive, maintenance
    pub location: String,
}


// pub async fn create_device(pool: &PgPool, name: &str, description: &str) -> Result<Device, sqlx::Error> {
//     let row = sqlx::query_as!(
//         Device,
//         "INSERT INTO devices (name, description) VALUES ($1, $2) RETURNING id, name, description",
//         name,
//         description
//     )
//     .fetch_one(pool)
//     .await?;

//     Ok(row)
// }
