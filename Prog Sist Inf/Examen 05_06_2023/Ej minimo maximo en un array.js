
let input = -1;
let num = Number;   
let array = [];

while (input != 0){  // Bucle para repetir el codigo mientras input sea diferente de 0
    input = prompt(`Introduce tu serie de números.
Pulsa cero para salir`);  // Le pido números al usuario con un prompt
    num = parseFloat(input.replace(",", "."));  /** Con parseFloat cambio de tipo string  a tipo Number. 
    El programa acepta números negativos y decimales. 
    Si el usuario introduce decimales separados con coma lo transforma a decimales separados por punto*/
    if(!isNaN(num) && typeof(num) === "number"){
        array.push(num);    /** Si los números introducidos NO son NAN y 
        el tipo de num es Number añade los números al array con el metodo push()*/
    } else {
        continue;
    }
}

let minimo = Math.min(...array);    //Con el metodo Math.min() saco el número menor introducido
let maximo = Math.max(...array);    //Con el metodo Math.max() hallo el número mayor introducido
let arraySorted = array.sort(function (param1, param2){return param1 - param2});    /** Ordeno el array 
de números introducidos por el usuario*/

alert(`El número menor es: ${minimo}
El número mayor es: ${maximo}
Los números que has introducido ordenados de menor a mayor: ${arraySorted.join(", ")}`)  /** Muestro al usuario 
el número menor y el número mayor y la lista ordenada de números introducidos*/
