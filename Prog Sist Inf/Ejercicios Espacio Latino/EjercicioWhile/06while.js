/*Escribir un script que pida al usuario una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso"*/

let numIntentos = 1, contraseña;
while (contraseña!= "Nomeacuerdo" && numIntentos <= 3){
    contraseña = prompt("Introduce la contraseña");
    numIntentos++;
}
if (contraseña!= "Nomeacuerdo" && numIntentos <= 3){
        contraseña = prompt("Acceso denegado. Vuelva a intentarlo");
        console.log("Acceso denegado");
        
}
if (contraseña == "Nomeacuerdo"){
        alert("Acceso concedido");
}

console.log(numIntentos);

