/* global use, db */

const database = 'NEW_DATABASE_NAME';
const name = 'NEW_COLLECTION_NAME';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection('users');


// Insertar un registro a la colección
db.users.insertOne({ name:'Juan', lastName: 'Jaramillo'});

// Consultar todo en users
db.users.find();

// Consultar solo el campo "name" de todos los documentos en la colección "users"
db.users.find({}, { name: 1, _id: 0 });

// Actualizar datos
db.users.updateOne(
  { _id: ObjectId('65e5dd6fecc6b16f80a6463d') },
  { $set: { age: 25 } }
);

// Eliminar
db.users.deleteOne({
  _id : ObjectId('65e5dd6fecc6b16f80a6463d')
});


