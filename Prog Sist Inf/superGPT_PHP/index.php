<!DOCTYPE html> 
<html lang="es"> 

<head>
  <meta charset="UTF-8"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SuperChatGPT</title> 
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
      <div id="my-div"></div>
      <section class="sec-key">
        <form> <!-- Added the 'action' attribute -->
          <!--<label for="api-key-input">Ingresa tu clave de API: </label>
          <br>
          <input type="text" id="api-key-input" name="api-key-input" placeholder="🗝️Aquí va tu clave API🗝️" required>
          <br><br>-->
          <label for="question">Pregunta:</label><br>
          <textarea id="question" name="question" rows="4" cols="50" placeholder="🥑🥑🥑¿Te gustan los aguacates?🥑🥑🥑"></textarea>
          <br><br>
          <button type="submit">Enviar</button> <!-- Changed the onclick event to submit the form -->
        </form>
      </section>

      <section class="sec-res">   
        <label for="answer">Respuesta:</label><br>
        <textarea id="answer" name="answer" rows="10" cols="77" placeholder="🥑🥑🥑Me gustan los aguacates y las papayas...;D🥑🥑🥑"><?php echo $answer ?? ''; ?></textarea>
        <button action="savePrompts.php" method="POST" onclick="">Guardar pregunta y respuesta</button>
      </section> 
    </div>
  </div>  

  <footer>
    <p>Derechos de SuperChatGPT © 2023</p>
    <small class="text-muted">No se lastimaron aguacates en esta página. Presuntamente.</small>
  </footer>

</body>
</html>
