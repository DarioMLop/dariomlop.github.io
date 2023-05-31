let comensales = parseInt(prompt("Introduce el número de comensales"));
let patatasGramos = comensales * 200;  // patatas por persona
patatasKg = patatasGramos/1000;   // kilogramos de patatas
let huevos = patatasKg * 5;   // 5 huevos por kilo de patatas
let cebolla = patatasKg * 300;   // cebollas por kilo de patatas
console.log(`Para ${comensales} necesitas ${patatasKg} kilogramos de patatas, ${huevos} huevos y ${cebolla} gramos de cebolla`);

