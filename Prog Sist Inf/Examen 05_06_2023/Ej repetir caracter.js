/*
Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.

Si elijo X y luego telco 10 se mostrará XXXXXXXXXX. Si tecleo z me olverá a pedir letra, y sitecelo 20 me volverá a pedir el número
*/

let character = "", char = "", repeticiones = 0;    /* Inicializo tres variables*/

do {    // Creo un bucle do...while 
    character = prompt("Introduce X o Z");  /* Creo un prompt para pedir el caracter al usuario*/
    char = character.toUpperCase();  /* Con el método toUpperCase() me aseguro que el caracter esta en el formato deseado*/
} while(char != "Z" && char != "X")  /*El bucle continuara mientras la letra introducida no sea la z o la x*/

do {    /*Creo un segundo bucle do...while */
    repeticiones = parseInt(prompt("Introduce el número de repeticiones"))  /* Dentro pido al usuario cuantas repeticiones desea*/
} while(repeticiones < 1 || repeticiones > 15)   /* El bucle continua pidiendo el número hasta que esté entre el rango 1 y 15*/
    
alert(`${char.repeat(repeticiones)}`)   /* Por ultimo le muestro al usuario el caracter repetido gracias al metodo repeat()*/
