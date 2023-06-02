let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));

if (num2 != 0){
    let division = num1 / num2;
    alert(division.toFixed(2))
} else{
    alert("No se puede dividir por cero")
}