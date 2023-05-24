let num1 = Number(prompt("Introduce el primer número"));
let num2 = Number(prompt("Introduce el segundo número"));

//Método extendido
if (num1 > num2){
    alert(`${num1} es mayor que ${num2}`)
} else if (num2 > num1){
    alert(`${num2} es mayor que ${num1}`)
} else{
    alert("Son iguales")
}

//Método ternario

(num2 > num1) ? alert(`${num2} es mayor que ${num1}`) : alert(`${num1} es mayor que ${num2}`);

