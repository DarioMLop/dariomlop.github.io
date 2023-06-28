/*
En la página que puedes construir con este código HTML tienes tres bloques: uno de color rojo otro de color blanco y otro de color azul. Crea un script para que cuando el ratónse mueve desde el bloque rojo al central éste se pongo rojo. Si se mueve desde el azul al central, éste se pondrá azul. Si entra en el bloque desde otro sitio el bloque recuperará el color blanco.
*/
function ej7(){
  let red = document.getElementById("red");
  let white = document.getElementById("white");
  let blue = document.getElementById("blue");

  let isRed = false;
  let isBlue = false;

  red.addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || event.relatedTarget.id !== "white") {
      isRed = false;
      if (!isBlue) {
        white.style.backgroundColor = "white";
      }
    }
  });

  blue.addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || event.relatedTarget.id !== "white") {
      isBlue = false;
      if (!isRed) {
        white.style.backgroundColor = "white";
      }
    }
  });

  white.addEventListener("mouseover", function(event) {
    if (isRed) {
      white.style.backgroundColor = "red";
    } else if (isBlue) {
      white.style.backgroundColor = "blue";
    } else {
      white.style.backgroundColor = "white";
    }
  });

  white.addEventListener("mouseout", function(event) {
    if (!event.relatedTarget || (event.relatedTarget.id !== "red" && event.relatedTarget.id !== "blue" && event.relatedTarget.id !== "white")) {
      white.style.backgroundColor = "white";
    }
  });

  red.addEventListener("mouseover", function() {
    isRed = true;
    isBlue = false;
  });

  blue.addEventListener("mouseover", function() {
    isRed = false;
    isBlue = true;
  });

  white.addEventListener("mouseleave", function() {
    isRed = false;
    isBlue = false;
    white.style.backgroundColor = "white";
  });
}
ej7();