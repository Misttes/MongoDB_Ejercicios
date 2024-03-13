-- Active: 1709057024495@@bvx4jdsoc1mozxryzzns-mysql.services.clever-cloud.com@3306@bvx4jdsoc1mozxryzzns
SHOW DATABASES

/*1. Listado de todos los usuarios con solo los nombres, apellidos y edad, que tengan 20 años de edad.*/
SELECT * from users
WHERE edad > 20

/*2. Listado de todas las mujeres en la base de datos que tengan entre 20 y 30 años de edad.*/
SELECT * from users
WHERE genero = 'm' and edad >= 20 and edad <=30

/*3. Quién es la persona con menos edad de la base de datos.*/
SELECT nombres, MIN(edad) from users

/*4. Cuantos usuarios hay registrados en la base de datos.*/
SELECT COUNT(id) from users

/*5.Traer los 5 primeros usuarios de la base de datos*/
SELECT * from users ORDER BY 'id' ASC LIMIT 5


/*6. Traer los 10 últimos usuarios de la base de datos*/
SELECT * from users ORDER BY 'id' DESC LIMIT 10

/*7. Listar usuarios que su correo finalice en .net*/
SELECT * from users 
WHERE correo LIKE '%net%'

/*8. Listar usuarios no vivan en  colombia.*/
SELECT * from users WHERE pais != 'colombia'

/*9. Listar usuarios que no vivan en ecuador y panamá.*/
SELECT * from users WHERE pais != 'ecuador' and pais != 'panama'

/*10. Cuantos(numero) usuarios son de colombia y les gusta el rock.*/
SELECT COUNT(nombres) from users WHERE pais = 'colombia' and musica = 'rock'

/*11. Actualizar el género musical de todos los usuarios de la base de datos de "metal" a "carranga".*/
UPDATE users set musica = 'carranga' where musica = 'metal'

SELECT musica from users

/*12. Listado de hombres que les guste la "carranga" sean de colombia y tengan entre 10 y 20 años de edad.*/
SELECT * from users where genero = 'h' and musica = 'carranga' and pais = 'colombia' and edad >=10 and edad <020

/*13. Actualizar a todos los usuarios que tengan 99 años, su nuevo género musical favorito será la "carranga"*/
UPDATE users set musica = 'carranga' where edad >= 99

/*14. Listar todos los usuarios que su nombre inicie con "a","A"*/
SELECT * from users where nombres LIKE 'A%' 

/*15. Listar todos los usuarios que su apellido finalice en "z","Z"*/
SELECT * from users WHERE nombres like '%z'

/*16. Actualizar los usuarios que tengan 50 años de edad su nuevo género musical será NULL*/
UPDATE users set musica = 'NULL' WHERE edad = 50

/*17. Listar todos los usuarios que su género musical sea igual a NULL*/
SELECT * from users WHERE musica = 'NULL'

/*18. Cual es el resultado de la suma de todas las edades de la base de datos.*/
SELECT SUM(edad) from users

/*19. Cuantos usuarios tenemos registrados de "ecuador"*/
SELECT COUNT(id) from users  where pais = 'ecuador'

/*20. Cuántos usuarios son de Colombia y les gusta el vallenato.*/
SELECT COUNT(id) from users WHERE pais = 'colombia' and musica = 'vallenato'