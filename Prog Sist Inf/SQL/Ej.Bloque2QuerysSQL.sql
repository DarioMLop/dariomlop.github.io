--Ej.Bloque2QuerysSQL
/*https://parzibyte.me/blog/2018/02/06/ejercicios-resueltos-consultas-sql-mysql/amp/*/
/*1.Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca LG o SAMSUNG
*/-- versión corta y conveniente: SELECT NOMBRE, telefono, marca FROM tabla_prueba WHERE marca NOT IN ("LG", "SAMSUNG");
--SELECT NOMBRE, telefono, marca FROM tabla_prueba WHERE MARCA != "LG" AND marca != "SAMSUNG";
SELECT NOMBRE, telefono, marca 
FROM tabla_prueba 
WHERE NOT MARCA = "LG" 
AND NOT marca = "SAMSUNG";

/*2.Listar el login y teléfono de los usuarios con compañia telefónica IUSACELL*/
--SELECT activo, telefono FROM tabla_prueba WHERE compañia IN ("IUSACELL");
SELECT activo, telefono FROM tabla_prueba WHERE compañia = "IUSACELL";

/*3.Listar el login y teléfono de los usuarios con compañia telefónica que no sea TELCEL*/
-- SELECT activo, telefono FROM tabla_prueba WHERE compañia != "TELCEL";
--SELECT activo, telefono FROM tabla_prueba WHERE compañia NOT IN ("TELCEL");
SELECT activo, telefono FROM tabla_prueba WHERE NOT compañia = "TELCEL";

/*4.Calcular el saldo promedio de los usuarios que tienen teléfono marca NOKIA*/
SELECT AVG(saldo) 
FROM tabla_prueba 
WHERE marca = "NOKIA";

/*5.Listar el login y teléfono de los usuarios con compañia telefónica IUSACELL o AXEL*/
--SELECT activo, telefono, compañia FROM tabla_prueba WHERE compañia IN ("IUSACELL", "AXEL");
SELECT activo, telefono, compañia FROM tabla_prueba 
WHERE compañia = "IUSACELL" AND compañia = "AXEL";

/*6.Mostrar el email de los usuarios que no usan yahoo*/
--SELECT email FROM tabla_prueba WHERE email LIKE '%gmail.com%';
SELECT email 
FROM tabla_prueba 
WHERE NOT email 
LIKE "%YAHOO.COM%";

/*7.Listar el login y teléfono de los usuarios con compañia telefónica que no sea TELCEL o IUSACELL*/
SELECT NOMBRE, activo, telefono, compañia 
FROM tabla_prueba 
WHERE NOT compañia = "TELCEL" 
AND NOT compañia = "IUSACELL";

/*8.Listar el login y teléfono de los usuarios con compañia telefónica UNEFON*/
SELECT NOMBRE, activo, telefono, compañia FROM tabla_prueba WHERE compañia = "UNEFON";

/*9.Listar las diferentes marcas de celular en orden alfabético descendente*/
-- SELECT DISTINCT marca FROM tabla_prueba ORDER BY marca DESC;
SELECT marca FROM tabla_prueba 
GROUP BY marca ORDER BY marca DESC;

/*10.Listar las diferentes compañias en orden alfabético aleatorio
*/
-- SELECT compañia FROM tabla_prueba GROUP BY compañia ORDER BY RAND();
SELECT DISTINCT compañia FROM tabla_prueba ORDER BY RAND();

/*11.Listar el login de los usuarios con nivel 0 o 2*/
SELECT nombre, email, nivel FROM tabla_prueba WHERE nivel IN ("0", "2");

/*12.Calcular el saldo promedio de los usuarios que tienen teléfono marca LG*/
SELECT AVG(saldo) 
FROM tabla_prueba 
WHERE marca = "LG";