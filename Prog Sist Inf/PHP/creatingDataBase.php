<!--PHP file that creates a database, creates a table and takes the input of the HTML form and save it into a database -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="submit.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
      
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
      
        <input type="submit" value="Submit">
      </form>
<?php
    // Connect to MySQL database
    $host = 'localhost';
    $user = 'root';
    $password = '';
    
    $connection = mysqli_connect($host, $user, $password);

    // Check connection
    if (!$connection) {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    //Create database
    $dataBaseName = "users";
    $query = "CREATE DATABASE IF NOT EXISTS users";
    
    if (mysqli_query($connection, $query)) {
        echo 'Database created successfully';
    } else {
        echo 'Error creating database: ' . mysqli_error($connection);
    }

    // Select database
    mysqli_select_db($connection, $dataBaseName);
    
    // Create table
    $query = "CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nameUser VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )";

    if (mysqli_query($connection, $query)) {
        echo 'Table created successfully';
    } else {
        echo 'Error creating table: ' . mysqli_error($connection);
    };

    // Extract form data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Insert data into MySQL table
    $query = "INSERT INTO users (nameUser, email) VALUES ('$name', '$email')";
    if (mysqli_query($connection, $query)) {
        echo 'Data inserted successfully';
    } else {
        echo 'Error inserting data: ' . mysqli_error($connection);
    }

    // Close MySQL connection
    mysqli_close($connection);
?>
</body>
</html>