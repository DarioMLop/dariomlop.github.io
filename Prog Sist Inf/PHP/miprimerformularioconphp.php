<h1>My Form</h1>
<?php
    echo "Data of my form: ";
    echo $_GET["name"];
?>
<hr>
<form action="">
    <label for="name">Tell me your name:</label>
    <input id="name" name="name" type="text">
    <input type="submit" value="Submit">
</form>