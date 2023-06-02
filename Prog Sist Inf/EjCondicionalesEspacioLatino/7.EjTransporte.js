let transporte = prompt("Elija coche, tren, bicicleta o bús").toLowerCase();

let opciones = ["tren", "bus", "bús"]

if (opciones.includes(transporte)){
    alert("Lleva dinero para el ticket");
} else if (transporte == "coche"){
    alert("Lleva las llaves");
} else if (transporte == "bicicleta"){
    alert("Lleva el casco");
} else{
    alert("Disfrute lo viajado")
}
/*
switch (transporte){
    case "tren":
    case "bus":
        alert("Lleva dinero para el ticket");
        break;
    case "coche":
        alert("Lleva las llaves");
        break;
    case "bicicleta":
        alert("Lleva el casco");
        break;
    default:
        alert("No existe esa opción")
        break;
}*/