SHOW DATABASES

/*CREACION DE LAS TABLAS*/
CREATE TABLE Productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    categoria VARCHAR(45),
    precio INT,
    cantidad INT
)

CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    telefono VARCHAR(45),
    direccion VARCHAR(150)
)

CREATE TABLE Pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente int,
    fecha_pedido VARCHAR(45)
)

CREATE TABLE detalles_pedido (
    id int PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_producto INT, 
    cantidad INT,
    precio_unico INT
)
/*AGREGAR LLAVES FORANEAS*/

ALTER TABLE Pedidos ADD FOREIGN KEY (id_cliente) REFERENCES Clientes(id)

ALTER TABLE detalles_pedido ADD FOREIGN KEY (id_pedido) REFERENCES Pedidos(id)

ALTER TABLE detalles_pedido ADD FOREIGN KEY (id_producto) REFERENCES Productos(id)



/*INSERTAR INFO*/

INSERT INTO Productos(nombre, categoria, precio, cantidad) VALUES ('Gaseosa', 'Bebidas', 5500 ,5)

INSERT INTO Clientes (nombre, apellido, telefono, direccion) VALUES ('Angelica', 'Hernandez', '3284665246', 'carrera 54, calle A')

INSERT INTO Pedidos (id_cliente, fecha_pedido) VALUES (1, '2024-04-05')

INSERT INTO detalles_pedido(id_pedido, id_producto, precio_unico) VALUES (1, 1, 5.500)

/*SELECCIONAR*/

