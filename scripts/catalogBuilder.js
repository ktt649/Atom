// Write the result of the catalog to the webpage.
function writeCatalog(catalog){
	// Clear the feature div.
	var feature = document.getElementsByClassName("feature")[0];
	feature.innerHTML = "";
	
	// Note that for my personal solution, I am maintaining a separate list of popular items
	// and a separate list of all the other items. 
	var x;
	for (x in catalog) {
		if (x !== "Popular Items")  {
			// Build the header
			var header = document.createElement("div");
			header.innerHTML = x;
			header.className = "feature-text";
			feature.appendChild(header);
			
			// Build feature container
			var container = document.createElement("div");
			container.className = "feature-container";
			feature.appendChild(container);
			
			// Build the different features.
			var currentItems = catalog[x];
			for (var i = 0; i < currentItems.length; i++) {
				// Build the feature box.
				var featurebox = document.createElement("div");
				featurebox.className = "feature-box";
				container.appendChild(featurebox);

				// Build the img.
				var img = document.createElement("img");
				img.src = currentItems[i].itemImageSrc;
				img.alt = currentItems[i].itemImageAlt;
				featurebox.appendChild(img);

				// Build the model.	
				var featuremodel = document.createElement("div");
				featuremodel.className = "feature-box-model";
				featuremodel.innerHTML = currentItems[i].itemDescription;
				featurebox.appendChild(featuremodel);
				
				// Build the manufacturer.
				var featuremanufacturer = document.createElement("div");
				featuremanufacturer.className = "feature-box-model";
				featuremanufacturer.innerHTML = "By: "+currentItems[i].itemManufacturer;
				featurebox.appendChild(featuremanufacturer);
	
				// Build the price. 
				var featureprice = document.createElement("div");
				featureprice.className = "feature-box-price";
				featureprice.innerHTML = currentItems[i].itemPrice;
				featurebox.appendChild(featureprice);
				
				// I construct a unique id for each item with the prefix
				// add-to-Cart, it's category (which forms a title) and a unique integer
				// Construct the button.
				var id = "addToCart" + x + i;
				var button = document.createElement("button");
				button.id = id;
				button.type = "button";
				button.innerHTML = "Add to Cart";
				let c = currentItems[i];
				button.addEventListener("click", function(){addToShoppingList(c)});
				featurebox.appendChild(button);
			}
			
			// Construct the clear.
			var clear = document.createElement("div");
			clear.className = "clearboth";
			feature.appendChild(clear);
		}
	}
}

// Construct the options menu for limiting the results of the manufacturers. 
function addOptions(manufacturers){
	// Store the selector.
	var selector = document.getElementById("selector");
	
	// Add the all option to the options. 
	var child = document.createElement("option");
	child.value = "All";
	child.innerHTML = "All";
	selector.appendChild(child);

	// Add the remaining options.
	var option = null;
	for (option in manufacturers){
		child = document.createElement("option");
		child.value = manufacturers[option];
		child.innerHTML = manufacturers[option];
		selector.appendChild(child);
	}
}

// Limit the results by the selected manufacturer.
function limitResults(){
	// Store the selected value. 
	var value = selector.value;
	
	// Redraw the webpage with the new results. 
	writeCatalog(fetchCatalog(value));
}

// Setup the options menu to respond to changes. 
function setupSelector(){
	// Store the selector.
	var selector = document.getElementById("selector");
	
	// Add an event listener to the selector. 
	selector.addEventListener("change", limitResults);
}

// Add the options to the selector and setup the selector. 
addOptions(fetchManufacturers());
setupSelector();

// Write the catalog to the webpage. 
writeCatalog(fetchCatalog("All"));