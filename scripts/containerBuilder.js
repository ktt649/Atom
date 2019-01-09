var buttonListeners;

var popularItems = catalog["Popular Items"];

document.write( '<div class="feature-container">' );

for ( var i = 0; i < popularItems.length; i++) {

 	document.writeln('<div class="feature-box">');
	document.write('<img src="');
	document.writeln(popularItems[i].itemImageSrc);
	document.write('" alt="');
    document.write(popularItems[i].itemImageAlt);
	document.writeln('">');

	document.write('<div class="feature-box-model">');
	document.write(popularItems[i].itemDescription);
	document.writeln('</div>');

	document.write('<div class="feature-box-price">');
	document.write(popularItems[i].itemPrice);
	document.writeln('</div>');

	var id = "addToCart" + i;
	document.writeln('<button id='); 
	document.writeln( id + ' type="button">Add to Cart</button>');
	

	buttonListerners.id = popularItems[i].itemDescription;
	document.writeln('</div>');

}

	document.writeln('</div>');

alert("Done");