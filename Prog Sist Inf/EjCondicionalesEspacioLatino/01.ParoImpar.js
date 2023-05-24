let num = parseInt(prompt("Introduce un numero"));

let esPar = num % 2 == 0;   //La variable esPar es equivalente a un boolean
if (esPar){     //if true it shows the first message
    console.log(`Es par`)
} else{
    console.log(`Es impar`)
}
/*
Also:
if (num % 2 == 0){
    console.log(`Es par`)
} else{
    console.log(`Es impar`)
}
*/