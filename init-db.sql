CREATE DATABASE IF NOT EXISTS resto_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Grant privileges
GRANT ALL PRIVILEGES ON resto_db.* TO 'resto_user'@'%';
FLUSH PRIVILEGES;

-- Switch to database
USE resto_db;
