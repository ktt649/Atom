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
        
    // Create connection. mysqli
      $db = mysqli_connect($servername, $username, $password,$dbname, $dbport);
      // Create connection. PDO
      // $db = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
      
      //Connection Check
      if (!$db)
      {
        die('Could not connect: ' . mysql_error());
      }
      
      //Table with columns:  name, streetAddress, cityPostalCode, provinceTerritory, email, creditCardNumber
        $CreateCustomerTable = "CREATE TABLE IF NOT EXISTS Customers (
        name VARCHAR(255) NOT NULL,
        streetAddress VARCHAR(255) NOT NULL,
        cityPostalCode VARCHAR(255) NOT NULL,
        provinceTerritory VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        creditCardNumber INT(16) UNSIGNED,
        message VARCHAR(255)
        )";
        //Execute Insert to customer db and print error if not working.
        if (!mysqli_query($db, $CreateCustomerTable))
        {
          die('Error: ' . mysqli_error($db));
        }
        
        $name = $_POST['name'];
        $address= $_POST['address'];
        $city= $_POST['city'];
        $province= $_POST['province'];
        $email= $_POST['email'];
        $creditCard= $_POST['creditCard'];
        $message= $_POST['message'];
        
        $InsertCustomer = "Insert INTO Customers (name, streetAddress, cityPostalCode, provinceTerritory,
        email, creditCardNumber, message)
        Values ('$name','$address','$city','$province','$email','$creditCard','$message');";
        
        if(!mysqli_query($db, $InsertCustomer)){
            die('Error: ' . mysqli_error($db));
        }
?>