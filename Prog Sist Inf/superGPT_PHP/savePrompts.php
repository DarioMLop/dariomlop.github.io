<?php
/* Conexión a base de datos local*/
$dataBase_Host = "localhost";
$dataBase_User = "root"; //mala idea para el futuro. En el futuro crearemos un usuario con privilegios
$dataBase_Password = "";
$dataBase_Name = "tabla_prueba";  // $dataBase_Name = test -> en casa
// conection with the database. El nombre de la variable es irrelevante
$conection = mysqli_connect($dataBase_Host, $dataBase_User, $dataBase_Password, $dataBase_Name);

//Comprobar errores
if (!$conection){
    die("Error en la conexión: " . mysqli_connect_error());
}
echo "Conexión exitosa";

// Query para crear tabla prompts con columnas id, questions y answers
/*$createTableQuery = "CREATE TABLE prompts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    questions TEXT NOT NULL,
    answers TEXT NOT NULL
)";
$conection->query($createTableQuery);*/

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //$apiKey = $_POST["api-key-input"];
    $apiKey = "MyApiKey_personal";  //here goes the api key
    $question = $_POST["question"];
  
    $data = [
      "model" => "text-davinci-003",
      "prompt" => $question,
      "max_tokens" => 3000,
      "temperature" => 0
    ];
  
    $options = [
      "http" => [
        "header" => "Content-Type: application/json\r\n" .
                     "Authorization: Bearer " . $apiKey . "\r\n",
        "method" => "POST",
        "content" => json_encode($data)
      ]
    ];
  
    $context = stream_context_create($options);
    $result = file_get_contents("https://api.openai.com/v1/completions", false, $context);
  
    if ($result === false) {
      echo "Error sending request to the API.";
    } else {
      $response = json_decode($result, true);
      $answer = $response['choices'][0]['text'];
      echo $answer;
  
      // Insert the question and answer into the database table
      $insertQuery = "INSERT INTO prompts (question, answer) VALUES (?, ?)";
      $statement = $conection->prepare($insertQuery);
      $statement->bind_param("ss", $question, $answer);  //"ss" stand for the type of parameter expected. In this case string. Can be "si" for stringinteger, "d" for double...
      $statement->execute();
  
      // Check if the insertion was successful
      if ($statement->affected_rows > 0) {
        echo "Data saved to the database.";
      } else {
        echo "Error saving data to the database.";
      }
  
      $statement->close();
    }
  }
  ?>