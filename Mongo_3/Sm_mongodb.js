/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');


// Creación de colecciones
db.createCollection("Productos")
db.createCollection("Clientes")
db.createCollection("Pedidos")

// Colección de Productos
db.Productos.insertMany([
    {
        nombre: "Gaseosa",
        categoria: "Bebidas",
        precio: 2500,
        stock: 10
    },
    {
        nombre: "Arroz",
        categoria: "Comida",
        precio: 1900,
        stock: 57
    },
    {
        nombre: "Jabon",
        categoria: "Aseo",
        precio: 3500,
        stock: 45
    }
]);

// Colección de Clientes
db.Clientes.insertMany([
    {
        nombre: "Angelica",
        telefono: "323566789"
    },
    {
        nombre: "Mariana",
        telefono: "385476925"
    }
]);

// Colección de Pedidos
db.Pedidos.insertOne({
  id_cliente: ObjectId("65e723019d4217c6d63c471a"),
  fecha_pedido: new Date(),
  estado: "Espera",
  detalles: [
    {
      id_producto: ObjectId("65e723423ab8ffdffbbf5b7f"),
      cantidad: 3,
      precio_unitario: 2000,
    },
  ],
});


db.supermercado.find()