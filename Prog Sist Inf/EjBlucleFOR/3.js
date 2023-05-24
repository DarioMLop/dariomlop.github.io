/*3.Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n'). */
let num = 13, mensaje = 0;   // parseInt(prompt(...))

for (let iterator = 0; iterator < num; iterator = iterator + 2){
    mensaje = mensaje + iterator + "\n";
}
console.log(mensaje)