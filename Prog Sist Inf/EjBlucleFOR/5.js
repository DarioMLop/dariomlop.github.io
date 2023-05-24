/*5. En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0. */
let num = 33, num2 = 0, mensaje = "";     //parseInt(prompt(...))

for (let iterator = 2; iterator < num; iterator = iterator + 3){
    mensaje = mensaje + iterator + ", ";
    //console.log(mensaje)
}
console.log(mensaje)

/* 2º metodo usando modulo (%)
for (){
 if(num % 3 == 2){

 }
}
*/