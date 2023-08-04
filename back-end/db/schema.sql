DROP DATABASE IF EXISTS ahead_shopping_development;
CREATE DATABASE ahead_shopping_development;

\c ahead_shopping_development;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) NOT NULL,
  price NUMERIC NOT NULL,
  quantity INTEGER NOT NULL,
  images TEXT NOT NULL
);

CREATE TABLE descriptions (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) NOT NULL,
  content TEXT NOT NULL
);
