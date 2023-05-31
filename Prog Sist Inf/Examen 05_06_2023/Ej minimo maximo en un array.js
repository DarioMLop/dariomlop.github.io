
let num = Number;
let array = [];

while (num != 0){
    num = parseInt(prompt("Introduce números y para salir pulsa 0"));
    array.push(num);  /**Con el metodo push() agrego números a mi array. Para mi tiene sentido que sean negativos*/
}

let minimo = Math.min(...array);
let maximo = Math.max(...array);
let arraySorted = array.sort(function (param1, param2){ return param1 - param2});

alert(``)