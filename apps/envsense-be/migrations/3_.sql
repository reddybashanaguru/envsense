
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    addressLine VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    user_id INT NOT NULL,
    contact_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE sub_locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    addressLine VARCHAR(255),
    contact_number VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    location_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
);

CREATE TABLE data_loggers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sub_location_id INT NOT NULL,
    archived BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sub_location_id) REFERENCES sub_locations (id) ON DELETE CASCADE
);

CREATE TYPE channel_type AS ENUM ('temperature', 'Relative Humidity', 'Dew point');

CREATE TABLE channels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    data_logger_id INT NOT NULL,
    channelType channel_type NOT NULL,  -- Uses the ENUM type defined above
    recent_reading_value FLOAT,
    recent_reading_time TIMESTAMP,
    min_reading_value FLOAT,
    max_reading_value FLOAT,
    min_reading_time TIMESTAMP,
    max_reading_time TIMESTAMP,
    trend_data JSONB,  -- Stores trends as a JSON array
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (data_logger_id) REFERENCES data_loggers (id) ON DELETE CASCADE
);




