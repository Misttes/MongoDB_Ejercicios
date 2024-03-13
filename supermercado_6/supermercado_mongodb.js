db.empresa.find( { ciudad : 'Morarfurt' } );

db.createCollection("productos");
db.productos.insertOne({
  nombre: "jabon liquido",
  categoria: "aseo",
  precio: 4600
});

db.productos.find();
db.productos.insertOne( 
    { nombre: 'leche alquria', categoria: 'alimentos', precio: 4000 } 
);

// Clientes
db.createCollection("clientes");
db.clientes.insertOne({
  nombre: "juan jaramillo",
  telefono: "3148169041"
});

db.clientes.find();

// Pedidos
db.createCollection("pedidos");
db.pedidos.insertOne({
  cliente_id: ObjectId(), // Usando ObjectId() para generar un nuevo ID
  fecha: ISODate("2024-02-17"),
  detalles: [
    {
      producto_id: ObjectId(), // Usando ObjectId() para generar un nuevo ID
      cantidad: 1
    }
  ]
});

// Borrar todos los documentos de la colección "pedidos"
db.pedidos.deleteMany({});

// Eliminar la colección "productos"
db.pedidos.drop();

db.pedidos.find();



