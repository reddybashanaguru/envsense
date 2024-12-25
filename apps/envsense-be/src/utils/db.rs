use sqlx::postgres::PgPool;
use std::sync::Arc;
use crate::models::user::User;
use crate::config::get_db_url;
use crate::models::audit_log::AuditLog;
use time::OffsetDateTime;



pub struct DbConnection {
    pub pool: Arc<PgPool>,
}

impl DbConnection {
    // Create a new DbConnection
    pub async fn new() -> Result<Self, sqlx::Error> {
        let pool = PgPool::connect(&get_db_url()).await?;
        Ok(DbConnection { pool: Arc::new(pool) })
    }

    // Fetch user by username
    pub async fn fetch_user_by_username(&self, username: &str) -> Result<User, sqlx::Error> {
        let mut user: User = sqlx::query_as!(User, "SELECT * FROM users WHERE username = $1", username)
            .fetch_one(&*self.pool)
            .await?;
    
        // Convert OffsetDateTime (with timezone) to PrimitiveDateTime (without timezone)
        let (created_at, updated_at) = User::convert_dates(user.created_at, user.updated_at);
    
        user.created_at = created_at.map(|dt| dt.assume_utc());
        user.updated_at = updated_at.map(|dt| dt.assume_utc());
    
        Ok(user)
    }
    
    // Create a user
    pub async fn create_user(&self, username: &str, email: &str, password: &str) -> Result<(), sqlx::Error> {
        sqlx::query!(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
            username,
            email,
            password
        )
        .execute(&*self.pool)
        .await?;
        Ok(())
    }

    pub async fn create_audit_log(&self, audit_log: AuditLog) -> Result<(), sqlx::Error> {
        // Use OffsetDateTime directly
        let created_at = audit_log.created_at.unwrap_or_else(OffsetDateTime::now_utc);

        sqlx::query!(
            "INSERT INTO audit_logs (action, user_id, target_table, target_id, created_at) VALUES ($1, $2, $3, $4, $5)",
            audit_log.action,
            audit_log.user_id,
            audit_log.target_table,
            audit_log.target_id,
            created_at,  // Pass the OffsetDateTime directly
        )
        .execute(&*self.pool)
        .await?;

        Ok(())
    }

    

    // Other database functions...
}
