DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(80) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Appliances", 49, 70), 
("Toaster Oven", "Appliances", 56, 45),
("Dishwasher", "Appliances", 190, 25),
("Couch", "Furniture", 250, 39),
("Dressor", "Furniture", 110, 15),
("Dining Table", "Furniture", 120, 33),
("Laptop", "Electronics", 700, 25),
("Handheld Game", "Electronics", 85, 30),
("Cellphone", "Electronics", 150, 95),
("Television", "Electronics", 200, 75);

SELECT * FROM products;
