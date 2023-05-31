/*Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número*/

let letra = prompt("Introduce S o N").toLowerCase();
while (letra.toLowerCase() != "s" && letra.toLowerCase() != "n"){
    if (letra === "s"){
        letra = prompt("¿Quiere continuar con el programa?");;
    } else if (letra === "n") {
        break;
    }
}