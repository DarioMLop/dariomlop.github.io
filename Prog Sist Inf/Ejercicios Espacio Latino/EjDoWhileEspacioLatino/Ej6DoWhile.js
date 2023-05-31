/**En este sript se trata de calcular el máximo común divisor de dos números. El algorimto es simple: dividimos el primoer por el segundo. si el resto es cero este segundo es el mcm. Si no se desecha el primero y se repite el proceso con el segundo y el resto. Así mientras el resto no sea 0 */

/*let num1 = parseInt(prompt("Introduce primer número")), num2 = parseInt(prompt("Introduce primer número"));

const numsArray = [num1, num2];*/

let arr = [[1, 2], [3, 4], [5, 6, 7]] 
let product = 1;
    
  for (let count1 = 0; count1 < arr.length; count1++){
    console.log(arr[count1])
    for (let count2 = 0; count2 < arr[count1].length; count2++){
        console.log(arr[count2])
      //product = arr[count1] * arr[count2];
    }
  }
  
  //console.log(product);
