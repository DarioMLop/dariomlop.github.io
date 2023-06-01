/*Con do...while pedir dos números. Se repite el bucle hasta que el primero ES menor que el segundo*/

let num = "", num2 = "";    // Inicializo dos variables tipo string

do{   /* Inicializo bucle do...while y dentro le pido los dos números al usuario */
    num = parseInt(prompt("Introduce el primer número. El segundo debe ser mayor"));
    num2 = parseInt(prompt("Introduce el primer número"));
} while(num2 < num);  /* El bucle se repite hasta que el segundo número es mayor que el primero*/

if (num2 > num){    /*Si el orden de los números es correcto se muestra al usuario un alert diciendole lo obvio*/
    alert(`${num2} es mayor que ${num}`);
}
