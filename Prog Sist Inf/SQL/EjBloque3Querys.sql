/*1*/
SELECT usuario, nombre, nivel FROM tabla_prueba WHERE nivel = 1 OR nivel = 3;

/*6*/
SELECT nombre, COUNT(*) FROM tabla_prueba WHERE sexo ="h";

/* 7 */
 SELECT nombre, telefono, compañia FROM tabla_prueba WHERE compañia IN ("AT&T");

 /*8*/
 SELECT compañia FROM tabla_prueba GROUP BY compañia ORDER BY compañia DESC;

 /*9*/
 SELECT nombre, email, activo FROM tabla_prueba WHERE activo = 0;

 /*10*/
 SELECT nombre, saldo, telefono FROM tabla_prueba WHERE saldo = 0 ORDER BY nombre;

 /*12*/
 SELECT saldo, telefono FROM tabla_prueba WHERE saldo > 300;