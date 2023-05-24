
<?php
    /* Conexión a base de datos local*/
    $dataBase_Host = "localhost";
    $dataBase_User = "root"; //mala idea para el futuro. En el futuro crearemos un usuario con privilegios
    $dataBase_Password = "";
    $dataBase_Name = "tabla_prueba";

    // conection with the database. El nombre d ela variable es irrelevante
    $conection = mysqli_connect($dataBase_Host, $dataBase_User, $dataBase_Password, $dataBase_Name);

    //Comprobar errores
    if (!$conection){
        die("Error en la conexión: " . mysqli_connect_error());
    }
    echo "Conexión exitosa";
    // Query para elegir las columnas deseadas
    $query = "SELECT usuario, NOMBRE, saldo FROM tabla_prueba 
    WHERE saldo BETWEEN 0 and 300 ORDER BY saldo DESC";
    $resultado = mysqli_query($conection, $query);

    //--Pasar el objeto a array. Solo enseña un usuario
    //$myArray = mysqli_fetch_array($resultado);

    // Con bucle while mostramos todos los usuarios
    while ($myArray = mysqli_fetch_array($resultado)){
        echo "Resultado query: ";
        echo "usuario: " . $myArray["usuario"] . "<br>";
        echo "nombre: " . $myArray["nombre"] . "<br>";
        echo "saldo: " . $myArray["saldo"] . "<br>";
    }
?>