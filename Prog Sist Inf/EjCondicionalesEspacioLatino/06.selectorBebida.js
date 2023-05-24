let bebida = prompt("Elija vino, cerveza, refresco o agua").toLowerCase();

switch (bebida){
    case "vino":
    case "cerveza":
        alert("Dirijase a la barra");
        break;
    case "agua":
    case "refresco":
        alert("Dirijase a la tienda");
        break;
    default:
        alert("No existe esa opción")
        break;
}