-- https://parzibyte.me/blog/2018/02/06/ejercicios-resueltos-consultas-sql-mysql/amp/
/*Select the column Nombre y Saldo from table solo las columnas  = 'M' y ordenar por el saldo*/
SELECT NOMBRE, SALDO FROM tabla_prueba WHERE sexo='M' ORDER BY SALDO DESC;

/*MUESTRA LA COLUMNA NOMBRE, TELEFONO Y MARCA PERO SOLO SI LA MARCA ES NOKIA, BLACKBERRY O SONY*/
SELECT NOMBRE, telefono, marca FROM tabla_prueba WHERE marca = 'NOKIA' OR marca = 'BLACKBERRY' OR marca = 'SONY';
SELECT NOMBRE, marca 
FROM tabla_prueba 
WHERE marca 
IN ("NOKIA", "BLACKBERRY", "SONY");


/*4. Contar los usuarios sin saldo o inactivos 
MUESTRA LOS IDX, NOMBRES, SALDO Y EL BOOLEAN ACTIVO SI LA COLUMNA ACTIVO EQUIVALE CERO O ACTIVO EQUIVALE FALSE*/
/*
Por ejemplo el siguiente query muestra usuarios con saldo = 0 o activo = 1 o true. --> Por eso NOT activo == 0
SELECT IDX, NOMBRE, SALDO, ACTIVO FROM tabla_prueba WHERE saldo = 0 OR activo;*/
SELECT COUNT(*) FROM tabla_prueba WHERE saldo = 0 OR activo = FALSE;
SELECT IDX, NOMBRE, SALDO, ACTIVO FROM tabla_prueba WHERE saldo = 0 OR activo = FALSE;  -- OR NOT activo

/*5. Listar el login de los usuarios con nivel 1, 2 o 3*/
SELECT usuario, NOMBRE, nivel FROM tabla_prueba WHERE nivel > 0 AND nivel < 4;
SELECT usuario, NOMBRE, nivel FROM tabla_prueba WHERE nivel BETWEEN 1 and 3;

/*6.Listar los números de teléfono con saldo menor o igual a 300
--
*/
SELECT usuario, NOMBRE, saldo FROM tabla_prueba WHERE saldo BETWEEN 0 and 300 ORDER BY saldo DESC;  -- Y de regalo lo ordena de forma descendente

/*7. Calcular la suma de los saldos de los usuarios de la compañia telefónica NEXTEL */  --Yo hice de Movistar
SELECT SUM(saldo) FROM tabla_prueba WHERE compañia = 'MOVISTAR';

/*
8. Contar el número de usuarios por compañía telefónica
*/                                       --agrupados por la columna
SELECT compañia, COUNT(*) FROM tabla_prueba GROUP BY compañia ORDER BY COUNT(*) DESC;   -- Ordenado en orden descendente 

/*9. Contar el número de usuarios por nivel*/
SELECT nivel, COUNT(*) FROM tabla_prueba GROUP BY nivel ORDER BY COUNT(*) DESC;

/*10. Listar el login de los usuarios con nivel 2*/
SELECT nombre, nivel FROM tabla_prueba WHERE nivel = 2;

/*11. Mostrar el email de los usuarios que usan gmail*/
-- Con % string que coincida
SELECT email FROM tabla_prueba WHERE email LIKE '%gmail.com%';  -- %posible pregunta examen%

/*12. Listar nombre y teléfono de los usuarios con teléfono LG, SAMSUNG o MOTOROLA*/
SELECT NOMBRE, marca FROM tabla_prueba WHERE marca IN ("LG", "SAMSUNG", "MOTOROLA");