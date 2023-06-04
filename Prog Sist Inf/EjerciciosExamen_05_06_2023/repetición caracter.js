/*
Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.

Si elijo X y luego telco 10 se mostrará XXXXXXXXXX. Si tecleo z me olverá a pedir letra, y sitecelo 20 me volverá a pedir el número
*/
let repeticiones = 0, caracter = "";
do{
    caracter = prompt("Introduce Z o X").toUpperCase();
} while(caracter != "Z" && caracter != "X");

do{
    repeticiones = parseInt(prompt("Introduce el número de repeticiones (entre 1 y 15)"));
    while(isNaN(repeticiones) || repeticiones < 1 || repeticiones > 15){
        repeticiones = parseInt(prompt("Valor incorrecto. Introduce un número entre 1 y 15"));
    }
}while(repeticiones < 1 || repeticiones > 15);

alert(`${caracter.repeat(repeticiones)}`)