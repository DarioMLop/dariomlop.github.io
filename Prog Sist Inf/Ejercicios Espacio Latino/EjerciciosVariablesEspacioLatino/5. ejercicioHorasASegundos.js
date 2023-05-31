let hora = parseInt(prompt("Introduce la hora:"));
let minutos = parseInt(prompt("Introduce la hora:"));
let horaEnSegundos = (hora * 60 * 60) + (minutos * 60)
console.log(`Tu hora en segundos ${horaEnSegundos}`)