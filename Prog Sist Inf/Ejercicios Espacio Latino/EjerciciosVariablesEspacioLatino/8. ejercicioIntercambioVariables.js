let var1 = Number(prompt("Introduce el primer número"));
let var2 = Number(prompt("Introduce el segundo número"));
let temp;
console.log(`Variables antes de intercambiar ${var1}, ${var2}`)
temp = var1;
var1 = var2;
var2 = temp;
console.log(`Variables después de intercambiar ${var1}, ${var2}`)