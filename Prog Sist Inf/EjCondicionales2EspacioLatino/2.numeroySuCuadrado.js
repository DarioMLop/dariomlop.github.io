let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el cuadrado del número"));

if (num2 == num1**2){
    alert("Acertaste, correcto");
} else{
    alert("Frio, helado, no correcto");
}

//Método ternario
(num2 == num1**2) ? alert("Acertaste, :D") : alert("Frio, helado, muy mal :C");