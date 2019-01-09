<?php
    // Establish connection and manipulate the database.
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $dbname = "Products";
    $dbport = 3306;

    //XAMPP Connection Information
        $servername = 'localhost';
        $username = 'root';
        $password = "";
        $dbname = "Atom_Products";
        $dbport = 3306;

    // Create connection.
    $db = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);

    // Store the type of request. 
    $request = $_SERVER["REQUEST_METHOD"];

    if ($request == "POST"){
        require_once("items.php");
    }
    else if ($request == "GET"){
        require_once("manufacturers.php");
    }
    
    // Print the JSON representation.
    echo $JSON;

   $conn = null;
?>