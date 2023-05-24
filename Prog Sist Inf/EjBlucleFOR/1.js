/*1.Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.*/
let num, mensaje = 0, num2;
num = 12       //parseInt(prompt("introduce el número"));

for (num2 = 0; num2 < num; num2 = num2 + 1){    //for (num2 = 0; num2 < num; num2++)
    mensaje = mensaje + num2 + ", ";
}
mensaje = mensaje + num2
console.log(mensaje)