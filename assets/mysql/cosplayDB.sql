DROP DATABASE IF EXISTS cosplayDB;
CREATE DATABASE cosplayDB;
USE cosplayDB;

CREATE TABLE contacts (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
email_address VARCHAR(30) NOT NULL,
phone_number TEXT NOT NULL,
character_name VARCHAR(30) NOT NULL,
message TEXT NOT NULL,
PRIMARY KEY (id)
);

SELECT * FROM contacts;