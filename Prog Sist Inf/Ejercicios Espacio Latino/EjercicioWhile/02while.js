/*Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número*/

let num = Number(prompt("introduce un 5"));
while (num !== 5){
    num = Number(prompt("introduce un 5"));
}