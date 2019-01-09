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
        
        //data received from form for Customers Database
        $custName = $_POST["name"];
        $custAddress = $_POST["address"];
        $custCity = $_POST["city"];
        $custProvince = $_POST["province"];
        $custEmail = $_POST["email"];
        $custCreditCard = $_POST["creditCard"];
        $custMessage = $_POST["message"];
        
        //insert data from form into Customers database
        $sql_cust = "INSERT INTO Customers (name, streetAddress,
        cityPostalCode, provinceTerritory, email, creditCardNumber,message)
        VALUES ('$custName', '$custAddress', '$custCity', '$custProvince',
        '$custEmail','$custCreditCard','$custMessage'
        );";
        
        //Execute Insert to customer db and print error if not working.
        if (!mysqli_query($db, $sql_cust))
        {
          die('Error: ' . mysqli_error($db));
        }
        
        
        //Table with columns: customerName, productName,  date, price  ***FORMAT FOR DATE????
        $CreateTransationTable = "CREATE TABLE IF NOT EXISTS Transactions (
        customerName VARCHAR(255) NOT NULL,
        productName VARCHAR(255) NOT NULL,
        date VARCHAR(255),
        price FLOAT(10) UNSIGNED)";
        //Execute Insert to customer db and print error if not working.
        if (!mysqli_query($db, $CreateTransationTable))
        {
          die('Error: ' . mysqli_error($db));
        }
        
        // Data received from form for Transactions Database
        $itemCount = $_POST["itemCount"]-1;
        for ($x = 0; $x <= $itemCount; $x++) {
            $custName = $_POST["name"];
            $prodName = $_POST["prodName".$x];
            $date = date("Y-m-d"); 
            $price = $_POST["prodPrice".$x];
            
            $sql_trans = "INSERT INTO Transactions (customerName, productName,
                                                    date, price)
            VALUES ('$custName', '$prodName', '$date', '$price'
            );";
          
            //Execute insert to transactions db and print error if not working.
            if (!mysqli_query($db, $sql_trans))
            {
              die('Error: ' . mysqli_error($db));
            }
        } 
    
?>