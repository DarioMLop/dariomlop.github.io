/*2.Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.*/
let num;   //num = parseInt(prompt(...))
let mensaje = 0, num2 = 0;

for (num = 7; num > num2; num--){
    mensaje = mensaje + num + ", ";
    //console.log(mensaje);
}
mensaje = mensaje + num;
console.log(mensaje);