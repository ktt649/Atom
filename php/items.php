<?php
    // Include the defined classes. 
    require_once("classes.php");
    
    // Construct the query for the categories. 
    $query = "SELECT DISTINCT category FROM Products;";
    
    // Query the database for the categories. 
    $stmt = $db->query($query);
    
    // Collect the categories.
    $categories = array();
    while ($row = $stmt->fetch()){
        array_push($categories, $row[0]);
    }
    
    // Query the database for the top six items of each category.
    $manufactures = "";
    $temp = $_POST["manufacturer"];
    if ($temp != null && $temp != "All"){
        $manufactures = "AND manufacturer = " . "\"" . $_POST["manufacturer"] . "\"";
    }
    foreach ($categories as $temp){
        // Construct the query.
        $query = "SELECT * FROM Products WHERE category = " . "\"" . $temp . "\"" . $manufactures . "LIMIT 6;";
        $stmt = $db->query($query);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
        // Collect the results. 
        $items = array();
        while ($row = $stmt->fetch()){
            $item = new Item($row["imageLocation"], $row["productName"], $row["price"], $row["manufacturer"]);
            $item->itemManufacturer = $row["manufacturer"];
            
            array_push($items, $item);
        }
        
        // Store the results for the category.
        $catalog[$temp] = $items;
        
        // Convert the catalog to a JSON representation.
        $JSON = json_encode($catalog);
    }
?>