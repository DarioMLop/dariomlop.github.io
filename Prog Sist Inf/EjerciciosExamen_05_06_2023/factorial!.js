/*
Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). 
Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
Si escribo factorial(3) obtendré 3*2*1 = 6

No valen números negativos
factorial(0) = 1
factorial(1) = 1
factorial(5) = 5*4*3*2*1 = 120

factorial(3) = 3*factorial(2)
             = 3*2*factorial(1)
             = 3*2*1 = 6
*/

let num = Math.abs(parseInt(prompt("Introduce el número a factorializar")));    /** Pido un número al usuario que convierto a número entero y positivo */
while (isNaN(num)){
    num = Math.abs(parseInt(prompt("Valor introducido no valido. Introduce un número")));
}
function factorial(num){    /**Creo una función llamada factorial con parametro num */
    if(num <= 1){   /** Si el número introducido es igual o menor que uno la función retorna 1. */
        return 1;
    }
    return num * factorial (num -1); /** La función se llama a si misma recursivamente */   
}

alert(`El factorial de ${num} es: ${factorial(num)}`)