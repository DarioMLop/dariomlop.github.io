let kiloMetros = Number(prompt("Introduce los kilómetros recorridos: "));
let litros = Number(prompt("Introduce los litros consumidos: "));
let consumo = kiloMetros / litros
console.log(`Has consumido ${consumo.toFixed(2)} litros/kilómetro`)