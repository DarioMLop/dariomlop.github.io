/*
Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.

Si elijo X y luego telco 10 se mostrará XXXXXXXXXX. Si tecleo z me olverá a pedir letra, y sitecelo 20 me volverá a pedir el número
*/

let character = prompt("Introduce el caracter. Z para terminar").toUpperCase();
let repeticiones = parseInt(Math.abs(prompt("Introduce el número de repeticiones. Introduce 0 para salir")))

do {
    alert(character.repeat(repeticiones))
    repeticiones--
} while(character !== "Z" || repeticiones !== 0)
