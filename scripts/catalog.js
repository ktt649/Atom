// Retrieve the catalog from a PHP file that produces a JSON representation of it.
function fetchCatalog(manufacturer){
    // Establish the http request.
    var xmlhttp = new XMLHttpRequest();
    var url = "./php/query.php"; //"https://mockbin.org/bin/382af243-4a26-414a-b57d-ff1d50d8330a";    //bc8ed2d5-1d54-42ca-a910-cfe9ded06d26"; //"https://mockbin.org/bin/b1307535-2860-4f1d-9193-924db2db7a46";
    xmlhttp.open("POST", url, false);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("manufacturer="+manufacturer);
    
    // Return the result.
    if (xmlhttp.status == 200) {
        return JSON.parse(xmlhttp.responseText);
    }
}

// Fetch the list of manufacturers.
function fetchManufacturers(){
	// Establish the http request and send it.
    var xmlhttp = new XMLHttpRequest();
    var url = "./php/query.php"; 
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    // Return the result.
    if (xmlhttp.status == 200) {
        return JSON.parse(xmlhttp.responseText);
    }
}