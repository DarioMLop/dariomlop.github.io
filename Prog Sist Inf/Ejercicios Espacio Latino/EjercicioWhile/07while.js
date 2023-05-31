/*Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.*/

let numStop = parseInt(prompt("Teclea cero para parar"));
let num = "";
let numMax = [], max = 0, min = 0;

while (numStop !== 0){
    num = parseInt(prompt("Introduce numeros."))
    numMax.push(num);
}
max = numMax.sort[-1];
min = numMax.sort[0];
console.log(`Número máximo ${max} y el mínimo ${min}`);