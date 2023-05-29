/*En este script vas a crear un menu con tres opciones: escribir, leer, ssalir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.*/

do{
    const opciones = `Escoge entre las tres opciones:
    1. Escribir
    2. Leer
    3. Salir`;
    opcion = parseInt(prompt(opciones))
    switch (opcion){
        case 1:
            alert("Escribir")
            break;
        case 2:
            alert("Leer")
            break;
        case 3:
            alert("Fin del programa")
            break;
        default:
            alert("No es un número valido")
            break;
    }
} while(opcion != 3)
