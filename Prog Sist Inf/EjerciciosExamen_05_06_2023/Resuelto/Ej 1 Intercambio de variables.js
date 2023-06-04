/**
 * Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Tienes que escribir un programa que intercambie el valor de dos variables. 

Al final la primera variable debe tener el valor de la segunda y la segunda el valor de la primera.
*/

let num1 = parseInt(prompt("Introduce el primer número"));  // Pedimos el primer número al usuario
let num2 = parseInt(prompt("Introduce el segundo número"));  // Pedimos el segundo número al usuario
let temp = 0;
// Pongamos el ejemplo que le usuario introduce num1 = 31 y num2 = 76
temp = num1;  // temp = 31
num1 = num2;  // num1 = 76
num2 = temp;  // num2 = 31
// Para terminar se los muestro cambiados al usuario
alert(`Introdujiste ${num2}, ${num1} y ahora cambiarion: ${num1}, ${num2}`)