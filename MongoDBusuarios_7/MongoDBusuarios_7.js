const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jara171201:1Bn5uRGL8YHcb7Mf@clases.xi4viq3.mongodb.net/');

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('Connected to MongoDB');

    schema = mongoose.Schema({
        names : String,
        lastNames : String,
        email : String,
        city : String,
        country : String,
        earns : Number,
        age : Number,
        height : Number,
        weight : Number
    });

    const User = mongoose.model('User', schema);

    const aplication = express();
    aplication.use(express.json());

    aplication.get('/api/users', async (req, res) => {
        const users = await User.find();
        res.json(users);
    });

    aplication.listen(3002, () => {
        console.log('Example app listening on port 3002!');
    });
    
    //1. Obtener todos los usuarios que sean mayores de 18 años.
    
        aplication.get('/api/ejercicio-1', async (req, res) => {
            const users = await User.find( { age: { $gt: 18}});
            res.json(users);
            console.log(users);
        });
    

    //2. Obtener todos los usuarios que sean de Londres o de París.
    
        aplication.get('/api/ejercicio-2', async (req, res) => {
            const users = await User.find( { city: { $in: ['londres', 'paris']}});
            res.json(users);
            console.log(users);
        });
    

    //3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
    
        aplication.get('/api/ejercicio-3', async (req, res) => {
            const users = await User.find( { earns: { $gt: 2000 }, age: { $lt: 30}});
            res.json(users);
            console.log(users);
        });
    

    //4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
    
        aplication.get('/api/ejercicio-4', async (req, res) => {
            const users = await User.find( { country: 'españa', earns: { $gt: 2000 }});
            res.json(users);
            console.log(users);
        });
    

    //5. Obtener todos los usuarios que tengan entre 25 y 35 años.
    
        aplication.get('/api/ejercicio-5', async (req, res) => {
            const users = await User.find({ age: { $gt: 25, $lt: 35 } });
            res.json(users);
            console.log(users);
        });
    

    //6. Obtener a todos los usuarios que no sean de Estados Unidos.
    
        aplication.get('/api/ejercicio-6', async (req, res) =>{
            const users = await User.find( {country: { $nin: ['estados unidos']}});
            res.json(users);
            console.log(users);
        });
    
   
    //7. Obtener a todos los usuarios que sean de Londres y 
        //que ganen más de $2500 o que tengan más de 30 años.
    
        aplication.get('/api/ejercicio-7', async (req, res) => {
            const users = await User.find({

                city: {$eq: 'londres'}, 
                
                // Aqui se pasan los parametros que el 'or' va a evaluar
                $or: [
                    { earns: { $gt: 500}},
                    { age: { $gt: 30 } }
                ]
            });
        
            res.json(users);
            console.log(users);
        });
    
   
    //8. Obtener a todos los usuarios que sean de Australia
        // y tengan un peso mayor a 140 libras.
    
        aplication.get('/api/ejercicio-8', async(req, res) => {
            const users = await User.find( { country: {$eq: 'australia'}, width: {$gt: 140}});
            res.json(users);
            console.log(users);
        });
    

    //9. Obtener a todos los usuarios que no sean de Londres ni de París.
    
        aplication.get('/api/ejercicio-9', async(req, res) => {
            const users = await User.find( { 
                city: { $nin: 'lonres'}, city: {$nin: 'paris'} 
            });
            res.json(users);
            console.log(users);
        })
    

    //10. Obtener a todos los usuarios que ganen menos de $2000 al 
        //mes o que tengan más de 40 años.
    
        aplication.get('/api/ejercicio-10', async(req, res) => {
            const users = await User.find( {
                $or: [
                    { earns: {$lt: 2000}},
                    { age: {$gt: 30}}
                ]
            });
            res.json(users);
            console.log(users);
        })
    

    //11. Obtener a todos los usuarios que sean de Canadá y ganen 
        //más de $4000 al mes o que tengan una altura mayor a 180 cm.
        
        aplication.get('/api/ejercicio-11', async(req, res) => {
            const users = await User.find( {
                country: {$eq: 'canada'},
                $or: [
                    { earns: {$gt: 4000}},
                    { height: {$gt: 180}}
                ]
            });
            res.json(users);
            console.log(users);
        })
    

    //12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
    
        aplication.get('/api/ejercicio-12', async(req, res) => {
            const users = await User.find({
                country: {$eq: 'canada'},
                age: {$gt: 20, $lt: 30}
            });
            res.json(users);
            console.log(users);
        });
    
   
    //13. Obtener todos los usuarios que no tengan un correo electrónico registrado.
    
        aplication.get('/api/ejercicio-13', async(req, res) => {
            const users = await User.find({
                email:  { $exists: false }
            });
            res.json(users);
            console.log(users);
        })
    
   
    //14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
    
        aplication.get('/api/ejercicio-14', async(req, res) => {
            const users = await User.find({
                country: {$eq: 'francia'},
                earns: {$gt: 3000, $lt:5000}
            });
            res.json(users);
            console.log(users);
        });
    

    //15. Obtener todos los usuarios que sean de Brasil y que tengan un peso 
        //menor a 120 libras o más de 140 libras.
    
        aplication.get('/api/ejercicio-15', async(req, res) =>{
            const users = await User.find({
                country: {$eq: 'brazil'},
                $or: [
                    { width: {$lte: 120}},
                    { width: {$gte: 140}}
                ]
            });
            res.json(users);
            console.log(users);
        })
    

    //16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
    
        aplication.get('/api/ejercicio-16', async(req, res) => {
            const users = await User.find({
                age: {$lt: 25},
                $or: [
                    { country: {$eq: 'argentina'}},
                    { country: {$eq: 'chile'}},
                ]
            });
            res.json(users);
            console.log(users);
        })
    

    //17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
    
        aplication.get('/api/ejercicio-17', async(req, res) => {
            const users = await User.find({
                country: {$nin: ['españa','mexico']},
                earns: {$lt: 3000}
            });
            res.json(users);
            console.log(users);
        });
    

    //18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 
        //o una edad mayor a 35 años.
    
        aplication.get('/api/ejercicio-18', async(req, res) => {
            const users = await User.find({
                country: {$eq: 'alemania'},
                $or: [
                    { earns: {$lt: 4000}},
                    { age: {$gt: 35}}
                ]
            });
            res.json(users);
            console.log(users);
        });
    

    //19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
    
        aplication.get('/api/ejercicio-19', async(req, res) => {
            const users = await User.find({
                country: { $nin: 'colombia'},
                height: {$lt: 170}
            });
            res.json(users);
            console.log(users);
        });
    

    //20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

        aplication.get('/api/ejercicio-20', async(req, res) => {
            const users = await User.find({
                country: { $eq: 'india' },
                earns: { $exists: false }
            });
            res.json(users);
            console.log(users);
        });

});
