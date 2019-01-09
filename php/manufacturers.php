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
    
    // Construct the query for the manufacturers. 
    $query = "SELECT DISTINCT manufacturer FROM Products;";
            
    // Query the database for the manufacturers. 
    $stmt = $db->query($query);
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
    // Collect the manufacturers into an array. 
    $manufacturers = array();
    while ($row = $stmt->fetch()){
        array_push($manufacturers, $row["manufacturer"]);
    }
    
    // Encode the result as a JSON.
    $JSON = json_encode($manufacturers);
    
    
    
?>