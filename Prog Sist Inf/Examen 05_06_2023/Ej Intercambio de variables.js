/*Intercambio de valor entre dos variables*/
/* Con tiempo y aburrimento lo he hecho de cuatro. Seguro hay alguna forma más fácil.
Ahora que lo pienso con arrays e indices sería más rápido pero es trampa 
--> TO DO: Pedir al usuario los números a intercambiar*/
let num = 66, num2 = 22, num3 = 99, num4 = 44, temp = 0, temp2 = 0;  /* Inicializamos variables*/

console.log(`Números en orden original: 
1º: ${num}, 2º: ${num2}, 3º: ${num3}, 4º: ${num4}`);  /*Muestro al usuario los valores en orden inicial*/

temp = num;  // temp = 66
temp2 = num4  //temp2 = 44
num = num3;  // num = 99
num4 = num2;  // num4 = 22
num3 = temp;    // num3 = 66
num2 = temp2;   // num2 = 44

console.log(`Magia. Valores intercambiados (pares con pares): 
1º: ${num}, 2º: ${num2}, 3º: ${num3}, 4º: ${num4}`);    /*Muestro al usuario los valores cambiados*/
