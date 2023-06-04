/*
Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). 
Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
Si escribo factorial(3) obtendré 3*2*1 = 6

No valen números negativos
factorial(0) = 1
factorial(1) = 1
factorial(5) = 5*4*3*2*1 = 120
*/
let num = Math.abs(Math.floor(prompt("Introduce un número y se mostrará su factorial!")));  // Le pido al usuario un número y con Math.abs lo convierto en positivo y con Math.floor lo convierto en entero
/**
 * 
 * @param {Number} num
 * @returns el factorial de num
 */
function factorial(num){  //Creamos una función llamada factorial con parametro num que es el prompt introducido por el usuario
    if (num <= 1){  // Si num es igual o menor que uno la función retorna 1
        return 1;
    }
    return num * factorial(num - 1)  // else retorna num multiplicado recursivamente y en cada llamada restando uno al parametro num para que la función termine
}
alert(`El factorial de ${num} es ${factorial(num)}`)  // Por ultimo se devuelve al usuario el factorial de num en un alert