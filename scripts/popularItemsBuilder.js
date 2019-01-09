// Begin features.
document.writeln( '<div class="feature">' );

// Note that for my personal solution, I am maintaining a separate list of popular items
// and a separate list of all the other items.
var catalog = fetchCatalog("All");
var x;
for (x in catalog) {
	if (x === "Popular Items")  {
		
		// Build feature container
		document.write('<div class="feature-container">');
		var currentItems = catalog[x];
		for (var i = 0; i < currentItems.length; i++) {
			document.writeln('<div class="feature-box">');
			document.write('<img src="');
			document.writeln(currentItems[i].itemImageSrc);
			document.write('" alt="');
        	document.write(currentItems[i].itemImageAlt);
			document.writeln('">');

			document.write('<div class="feature-box-model">');
			document.write(currentItems[i].itemDescription);
			document.writeln('</div>');
			
			document.write('<div class="feature-box-model">');
			document.write("By: "+currentItems[i].itemManufacturer);
			document.writeln('</div>');

			document.write('<div class="feature-box-price">');
			document.write(currentItems[i].itemPrice);
			document.writeln('</div>');
			
			// I construct a unique id for each item with the prefix
			// add-to-Cart, it's category (which forms a title) and a unique integer
			
			var id = "addToCart" + x + i;
			document.write('<button id="'); 
			document.writeln(id + '" type="button">Add to Cart</button><BR>');
//			localStorage.setItem( id, currentItems[i] );
			let c = currentItems[i];
			document.getElementById(id).addEventListener("click", function(){addToShoppingList(c)});
			document.writeln('</div>');

		}
		
		document.writeln('</div>  <!-- end of feature-container-->');
		document.writeln('<div class="clearboth"></div>');
	}
}

function startShopping() {
	location.href = "store.html";
} 
