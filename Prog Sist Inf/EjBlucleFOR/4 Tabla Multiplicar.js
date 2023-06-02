/*4. Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

Recuerda que el salto de linea es el carácter "\n" */

let num = 8, num2 = 10, mensaje = "";      //parseInt(prompt("introduce el número"));

for (let iterator = 1; iterator <= num2; iterator = iterator + 1){
    mensaje = num * iterator;
    console.log(`${num} x ${iterator} = ${mensaje} \n`)
}
//mensaje = mensaje * iterator;
/** Se piden dos números y se enseña la tabla de multiplicar completa del primer número x el segundo
 * Ej: 4 * 60; 4 multiplicado por 0 hasta 4 multiplicado por 60
 * 
let num = parseInt(prompt("Introduce un número")); 
let num2 = parseInt(prompt("Introduce otro número")); 
let mensaje = "";

for (let iterator = 0; iterator <= num2; iterator = iterator + 1){
    mensaje = num * iterator;
    console.log(`${num} x ${iterator} = ${mensaje} \n`)
} */