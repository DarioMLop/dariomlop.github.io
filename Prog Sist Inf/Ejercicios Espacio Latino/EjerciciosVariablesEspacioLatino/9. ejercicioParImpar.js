let num = parseInt(prompt("Introduce tu número"));
/*if (num % 2 == 0){      //let esPar = num % 2 == 0  <--> boolean
    console.log("El número es par")
} else {
    console.log("El número es impar")
}*/
let esPar = num % 2 == 0;
if (esPar){     // esPar es true si num es par. Se ejecuta la primera condición
    console.log("El número es par")
} else {        // esPar es false o impar
    console.log("El número es impar")
}