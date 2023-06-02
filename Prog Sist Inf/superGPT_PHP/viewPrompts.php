<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Prompts - SuperChatGPT</title>
  <link rel="icon" href="./logo.png">
  <link href="styles.css" rel="stylesheet">
</head>

<body>
  <header>
    <div class="encabezado">
      <h1 class="titulo">SuperChatGPT</h1>
      <div class="logo">
        <img class="img_logo" src="https://raw.githubusercontent.com/cesarlpb/SuperChatGPT/main/logo.png" alt="logo">
      </div>
    </div>
  </header>

  <div class="container">
    <div class="background">
      <section class="sec-res">
        <h2>Preguntas y respuestas</h2>

        <?php
        /* Database connection details */
        $dataBase_Host = "localhost";
        $dataBase_User = "root";
        $dataBase_Password = "";
        $dataBase_Name = "tabla_prueba";  //test en casa
        
        /* Connect to the database */
        $connection = mysqli_connect($dataBase_Host, $dataBase_User, $dataBase_Password, $dataBase_Name);
        
        /* Check for errors */
        if (!$connection) {
          die("Error en la conexión: " . mysqli_connect_error());
        }
        
        /* Retrieve questions and answers from the database */
        $selectQuery = "SELECT question, answer FROM prompts";  //questions, answers en casa
        $result = $connection->query($selectQuery);
        
        /* Display questions and answers */
        if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
            echo "<h3>Pregunta:</h3>";
            //echo "<a href='?id='>#" . $row["id"] . "</a>";
            echo "<p>" . $row['question'] . "</p>";
            echo "<h3>Respuesta:</h3>";
            echo "<p>" . $row['answer'] . "</p>";
            echo "<hr>";
          }
        } else {
          echo "No hay preguntas y respuestas disponibles.";
        }
        
        /* Close the database connection */
        $connection->close();
        ?>

        <br>
        <a href="index.php">Volver</a>
      </section>
    </div>
  </div>

  <footer>
    <p>Derechos de SuperChatGPT © 2023</p>
    <small class="text-muted">No se lastimaron aguacates en esta página. Presuntamente.</small>
  </footer>
</body>

</html>
