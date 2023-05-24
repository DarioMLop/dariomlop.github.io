let long_tramo = Number(prompt("Introduce longitud del tramo"));
let tiempo = Number(prompt("Introduce tiempo del tramo en horas"));

let velocidad = 0;  // variable global por si la necesitamos
if (tiempo !=0){    //por si introducen tiempo = 0
    velocidad = (long_tramo / tiempo).toFixed(2);    
}
if (velocidad){
    if (velocidad >= 40 && velocidad <= 60){
        alert("Prueba superada");
    } else{
        alert(`Descalificado. Velocidad del tramo: ${velocidad}`);
    }
} else{
    alert("Algún dato es incorrecto");
}

/* Mi codigo
if (km_Hora > 40 && km_Hora < 60){
    alert("Prueba superada")
} else{
    alert(`Descalificado. Velocidad del tramo: ${km_Hora}`)
}*/