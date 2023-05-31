/*Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1*/

function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }
    if (num < 0 || isNaN(num)){
        return NaN;
    }
    return num * factorial(num - 1)
}