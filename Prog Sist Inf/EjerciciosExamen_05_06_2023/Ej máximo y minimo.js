/*
Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.

El usuario teclea la sere 4,2,3,5,0, El máximo es 5 y el minimo es 2. Si telcea 2,2,2,0, máximo es 2 y minimo es 2.
*/
let input = -1;
let num = 0;   // Inicializo tres variables
let array = [];
while (input != 0){     /** Creo un bucle while con la condición */
    input = prompt("Introduce la seríe de números. Pulsa cero para finalizar")  // He decidido que mi programa acepte números negativos y decimales 
    num = parseFloat(input.replace(",", "."));  //Si el decimal esta separado por coma la remplazo con un punto para que sea del tipo correcto
    if (!isNaN(num)){   // Si el usuario introduce algún dato que no sea tipo "Number" no lo añade al array
        array.push(num);
    }
}
let arraySorted = array.sort(function (param1, param2){return param1 - param2})     /**Ordeno el array de números */
let maximo = Math.max(...array);  /** Con las funciones de Math.max() y Math.min() puedo hallar el número mayor y menor*/
let minimo = Math.min(...array);
alert(`Númeno menor: ${minimo}
Número mayor: ${maximo}
Lista de números introducidos en orden: ${arraySorted.join(", ")}`);    /**Le muestro al usuario el número mayor y menor junto con la lista ordenada que ha introducido, para mayor visibilidad uso el método join() */