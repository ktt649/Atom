<?php
    // Define a useful class for storing the items. 
    class Item {
        
        // Store the image url.
        public $itemImageSrc;
        
        // Store the description.
        public $itemDescription;
        
        // Store the price.
        public $itemPrice;
        
        // Store the manufacturer.
        public $itemManufacturer;
        
        // Define the function constructor. 
        function __construct($imageSrc, $description, $price, $manufacturer){
            $this->itemImageSrc = $imageSrc;
            $this->itemDescription = $description;
            $this->itemPrice = $price;
            $this->itemManufacturer = $manufacturer;
        }
    }

    // Define the catalog class.
    class Catalog {
        
        // Construct the catalog.
        function __construct(){
            // Do nothing.
        }
    }
?>