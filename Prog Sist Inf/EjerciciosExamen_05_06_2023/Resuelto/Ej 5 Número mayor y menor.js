/*
Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. Si el primero es menor o igual que el segundo el programa acaba y dice "Numeros en orden creciente"
*/

let num1, num2;
do{     /** Hago un bucle do...while que pide números hasta que el segundo es mayor que el primero */ 
    num1 = parseInt(prompt("Introduce un número. El segundo debe ser mayor que el primero"));   /** Pido el primer número cambiando de tipo string a number */
    num2 = parseInt(prompt("Introduce el segundo número"));     /** Pido el segundo número cambiando de tipo string a number */
} while(num1 > num2);

if (num2 > num1){
    alert(`${num2} es mayor que ${num1}`)   /** Cuando el bucle termina y el orden ha sido correcto le muestro al usuario los números introducidos en pantalla con un alert */
} 