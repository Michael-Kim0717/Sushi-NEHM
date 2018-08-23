DROP DATABASE IF EXISTS sushi_db;
CREATE DATABASE sushi_db;

USE sushi_db;

CREATE TABLE sushi 
(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    devoured boolean
);