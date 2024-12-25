use axum::{Router, Extension};
use crate::routes::{auth, device, report, audit_log};
use crate::middlewares::auth_middleware::auth_middleware;
use std::sync::Arc;
use crate::utils::db::DbConnection;


mod config;
mod controllers;
mod models;
mod middlewares;
mod routes;
mod utils;

#[tokio::main]
async fn main() {
    config::init_config();

    let db = match DbConnection::new().await {
        Ok(conn) => Arc::new(conn),
        Err(err) => {
            eprintln!("Failed to connect to the database: {}", err);
            std::process::exit(1);
        }
    };
    // let db = Arc::new(DbConnection::new("your_database_url").await.unwrap());

    // Create a router for all protected routes that need authentication
        let protected_routes = Router::new()
        .merge(device::device_routes(db.clone()))
        .merge(report::report_routes(db.clone()))
        .merge(audit_log::audit_log_routes(db.clone()))
        .layer(Extension(db.clone()))
        .layer(axum::middleware::from_fn(auth_middleware::<axum::body::Body>)); // Apply auth middleware only here

        // Create a router for public routes like login
        let public_routes = Router::new()
        .merge(auth::auth_routes(db.clone())); // No middleware here

        // Combine both routers into the final app
        let app = Router::new()
        .merge(public_routes)  // Merge public routes (like login)
        .merge(protected_routes);  // Merge protected routes (with authentication middleware)


        let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
        axum::serve(listener, app).await.unwrap();
}
