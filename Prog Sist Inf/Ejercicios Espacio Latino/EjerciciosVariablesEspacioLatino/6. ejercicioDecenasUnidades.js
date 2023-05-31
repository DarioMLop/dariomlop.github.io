let numero = Number(prompt("Introduce el número:"));
// let numero = parseInt(prompt("Introduce el número:"));
let decenas = Math.floor(numero / 10);
// let decenas = parseInt(numero / 10);
let unidades = numero % 10;
console.log(`Decenas: ${decenas}\nUnidades: ${unidades}`)

/* con string:
let num = prompt("Introduce el número:");
let decenas = num[0]  <-- indice cero del string
let unidades = num[1]  <-- indice uno del string
console.log(`Decenas: ${decenas}\nUnidades: ${unidades}`)
*/