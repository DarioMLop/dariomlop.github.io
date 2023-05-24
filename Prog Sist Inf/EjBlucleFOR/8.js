/**Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está. */
let num = 8, num2 = 0, mensaje = "";     //parseInt(prompt(...))

for (let iterator = 0; iterator < num; iterator = iterator + 1){
    mensaje = mensaje + "x";
    console.log(mensaje);
}

/**
 * for (let iterator = "*"; iterator.length < 8; iterator = iterator + "*"){
    
    console.log(iterator);
    
}
 */