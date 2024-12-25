-- Insert roles (Admin, Supervisor)
INSERT INTO roles (name) VALUES
  ('admin'),
  ('supervisor')
ON CONFLICT (name) DO NOTHING;

-- Insert default users (ensure usernames are unique)
INSERT INTO users (username, email, password, role) VALUES
  ('admin_user', 'admin@example.com', 'password123', 'admin'),
  ('supervisor_user', 'supervisor@example.com', 'password123', 'supervisor')
ON CONFLICT (username) DO NOTHING;

-- Insert some devices (ensure names are unique)
INSERT INTO devices (name, type, location, status) VALUES
  ('Temperature Sensor', 'temperature', 'Room 101', 'active'),
  ('Pressure Sensor', 'pressure', 'Room 102', 'active')
ON CONFLICT (name) DO NOTHING;

-- Insert sample device logs
INSERT INTO device_logs (device_id, temperature, pressure, humidity) VALUES
  (1, 22.5, NULL, 45.0),
  (1, 23.0, NULL, 46.0),
  (2, NULL, 101.2, NULL)
ON CONFLICT (id) DO NOTHING;

-- Insert sample reports
INSERT INTO reports (report_type, device_id, content) VALUES
  ('Daily', 1, 'Temperature log for room 101'),
  ('Weekly', 2, 'Pressure data for room 102')
ON CONFLICT (id) DO NOTHING;

-- Insert some audit logs
INSERT INTO audit_logs (user_id, action, target_table, target_id, created_at) VALUES
  (1, 'Created user', 'users', 2, '2024-12-24 10:00:00'),
  (1, 'Created device', 'devices', 1, '2024-12-24 10:05:00'),
  (2, 'Viewed device logs', 'device_logs', 1, '2024-12-24 11:00:00')
ON CONFLICT (id) DO NOTHING;

