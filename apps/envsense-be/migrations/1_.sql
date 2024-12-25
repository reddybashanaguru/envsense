-- Add migration script here
-- Roles table (Admin, Supervisor)
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL -- 'admin' or 'supervisor'
);

-- Users table with Role Reference
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK(role IN ('admin', 'supervisor')) DEFAULT 'supervisor',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


-- Devices table (Admin and Supervisor can view devices, Admin can manage)
CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(100) NOT NULL,  -- E.g., temperature, pressure
    status VARCHAR(20) CHECK(status IN ('active', 'inactive', 'maintenance')) DEFAULT 'active',
    location VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Data Logs table (Admin can view and manage, Supervisor can view only)
CREATE TABLE device_logs (
    id SERIAL PRIMARY KEY,
    device_id INT REFERENCES devices(id) ON DELETE CASCADE,
    temperature DOUBLE PRECISION,    -- Example field for temperature
    pressure DOUBLE PRECISION,       -- Example field for pressure
    humidity DOUBLE PRECISION,       -- Example field for humidity
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Reports table (Admin can generate reports, Supervisor can only view)
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(100) NOT NULL,   -- E.g., "Daily", "Weekly"
    device_id INT REFERENCES devices(id) ON DELETE CASCADE,
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    content TEXT
);

-- Audit Logs table (For security and traceability)
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    action VARCHAR(255),
    target_table VARCHAR(100),
    target_id INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

