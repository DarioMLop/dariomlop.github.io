/*1*/
SELECT marca, COUNT(*) FROM tabla_prueba GROUP BY marca;

/*2*/
SELECT nombre, telefono, marca FROM tabla_prueba WHERE NOT marca = "LG" ORDER BY marca;

/*3*/
SELECT nombre, telefono, compañia FROM tabla_prueba GROUP BY compañia ORDER BY compañia;

/*4*/
SELECT saldo, COUNT(*) FROM tabla_prueba WHERE compañia = "UNEFON";

/*5*/
SELECT email FROM tabla_prueba WHERE email LIKE "%hotmail%";

/*6*/
SELECT usuario, nombre FROM tabla_prueba WHERE saldo = 0 OR activo = 0;

/*7*/
SELECT usuario, activo FROM tabla_prueba WHERE compañia IN ("IUSACELL","TELCEL");

/*8*/
SELECT marca, COUNT(*) FROM tabla_prueba GROUP BY marca ORDER BY marca;

/*9*/
SELECT marca FROM tabla_prueba ORDER BY RAND();

/*10*/
SELECT telefono, activo, COMPAÑIA FROM tabla_prueba WHERE compañia IN ("IUSACELL","unefon");

/*11*/
SELECT nombre, telefono, marca FROM tabla_prueba WHERE marca NOT IN ("motorola", "nokia");

/*12*/
SELECT SUM(saldo) FROM tabla_prueba WHERE compañia = "telcel";