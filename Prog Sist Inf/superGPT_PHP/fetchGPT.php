<?php   

// translated version of the fetch with javascript to the same in php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $elementApiKey = $_POST["api-key-input"];
  $elementQuestion = $_POST["question"];

  $data = [
    "model" => "text-davinci-003",
    "prompt" => $elementQuestion,
    "max_tokens" => 3000,
    "temperature" => 0
  ];

  $options = [
    "http" => [
      "header" => "Content-Type: application/json\r\n" .
                   "Authorization: Bearer " . $elementApiKey . "\r\n",
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
  }
}

?>
