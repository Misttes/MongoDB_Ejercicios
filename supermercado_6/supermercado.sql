/* Se requiere crear las (tablas,colecciones) necesarias para dar solución a la siguiente problemática.
Actualmente cuento con un supermercado, en el cual manejo muchos productos de diferentes categorías (aseo, enlatado, lácteos, etc), 
y no cuento con un sistema de información que me permita administrar dichos productos.
Adicional a eso me encuentro manejando pedidos que realizan los clientes desde whatsapp y me gustaria que existiera la forma 
de hacer eso en una base de datos, donde puede relacionar esos pedidos con mis clientes.

Necesito generar la solución a nivel de bases de datos relacionales y no relacionales.

Entregables:
Código fuente de la base de datos en mysql
Codigo fuente de la base de datos en mongoDB
Para realizar pruebas se requiere que exista en cada entidad o colección por lo menos un registro */

USE b4w1m9w9pl2dc80w8f7a;

CREATE TABLE categorias(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_categoria VARCHAR(45) NOT NULL
);
SELECT * FROM categorias;
INSERT INTO categorias (nombre_categoria)VALUES('aseo');
INSERT INTO categorias (nombre_categoria)VALUES('tecnologia');


CREATE TABLE marcas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_marca VARCHAR(45) NOT NULL
);
SELECT * FROM marcas;
INSERT INTO marcas 
(nombre_marca)VALUES('familia'),('sony');



CREATE TABLE productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR(45) NOT NULL,
    precio_producto DECIMAL(10, 2) NOT NULL,
    id_categoria INT,
    id_marca INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id),
    Foreign Key (id_marca) REFERENCES marcas(id)
);
SELECT * FROM productos;
INSERT INTO productos (nombre_producto, precio_producto, id_categoria, id_marca)VALUES
('jabon liquido', 4600, '1', '1'),
('computador de mesa', 2500000, '2', '2');



CREATE TABLE clientes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_cliente VARCHAR(45) NOT NULL,
    telefono_cliente VARCHAR(45) NOT NULL,
    documento_cliente VARCHAR(45) NOT NULL
);SELECT * FROM clientes;
INSERT INTO clientes (nombre_cliente, telefono_cliente, documento_cliente)VALUES
('juan jaramillo', '3007529489', '1002158571'),
('cristian franco', '3148169041', '100374897');


CREATE TABLE pedidos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    fecha_pedido DATE NOT NULL,
    Foreign Key (id_cliente) REFERENCES clientes(id)
);
SELECT * FROM pedidos;
INSERT INTO pedidos (id_cliente, fecha_pedido)VALUES
('1', '2024-02-05'),
('2', '2024-01-10');

CREATE TABLE detalles_pedido(
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_cliente INT,
    cantida INT NOT NULL,
    Foreign Key (id_cliente) REFERENCES clientes(id)
);
SELECT * FROM detalles_pedido;
INSERT INTO detalles_pedido (id_pedido, id_cliente, cantida)VALUES
('1', '1', 5),
('2', '2', 1);
ALTER TABLE detalles_pedido DROP COLUMN id_pedido;


SELECT clientes.*, detalles_pedido.*
FROM detalles_pedido
INNER JOIN clientes ON clientes.id = detalles_pedido.id_cliente;


