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

CREATE Table mens(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  size INTEGER NOT NULL,
  price INTEGER NOT NULL,
  instock BOOLEAN NOT NULL
)
CREATE Table womens(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  size INTEGER NOT NULL,
  price INTEGER NOT NULL,
  instock BOOLEAN NOT NULL
)

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer VARCHAR(255),
  rating INT,
  comment TEXT
);

ALTER TABLE reviews
ADD COLUMN item_id INTEGER REFERENCES items(id);

