DROP DATABASE IF EXISTS ahead_store_v1;
CREATE DATABASE ahead_store_v1;

\c ahead_store_v1;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(255) NOT NULL
);

