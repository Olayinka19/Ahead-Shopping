DROP DATABASE IF EXISTS olafolio_fruits;
CREATE DATABASE olafolio_fruits;

CREATE TABLE fruits (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  recipes TEXT NOT NULL,
  health_benefit TEXT NOT NULL,
  image TEXT NOT NULL,
  nutrition_info TEXT NOT NULL,
  description TEXT NOT NULL
);
