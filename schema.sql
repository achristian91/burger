CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) Not NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, eaten) VALUES ('Avacado Burger',FALSE);
INSERT INTO burgers (burger_name, eaten) VALUES ('Veggie Burger',FALSE);
INSERT INTO burgers (burger_name, eaten) VALUES ('BBQ Burger',FALSE);