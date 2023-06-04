/*
Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.

Si elijo X y luego telco 10 se mostrará XXXXXXXXXX. Si tecleo z me olverá a pedir letra, y sitecelo 20 me volverá a pedir el número
*/

let character = " ", char = " ", repeticiones = 0;  /**Inicializo tres variables, dos tipo string y una tipo number*/
do{     /** Hago un bucle do...while que va a continuar pidiendo un caracter hasta que caracter sea x o z */
    character = prompt("Introduce X o Z.")
    char = character.toUpperCase(); /** con la función toUpperCase() el bucle solo para con X o Z */
} while (char != "Z" && char != "X");

do{     /* Hago un segundo bucle do...while que pide el número de repeticiones entre 1 y 15*/
    repeticiones = parseInt(prompt("Introduce el número de repeticiones del 1 al 15"))
} while (repeticiones < 1 || repeticiones > 15)     /** Probando el código he comprobado que con && el bucle permite más de 15 caracteres. Con || sigue pidiendo el número hasta que está en el rango correcto*/
alert(char.repeat(repeticiones))    /** Por último muestro al usuario la repetición del caracter en un alert y con el metodo repeat repito el caracter*/