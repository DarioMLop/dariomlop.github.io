/*Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1*/

let input = prompt("Introduce un número");
let num = parseInt(input);
while (isNaN(num) || num.toString() !== input || num < 0){
    input = prompt("Sólo son permitidos números enteros positivos. Introduce un número");
    num = parseInt(input);
}

function factorial(num){
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}
alert(`El factorial de ${num} es ${factorial(num)}`)
//console.log((`El factorial de ${num} es ${factorial(num)}`))
