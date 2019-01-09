var total = 0;

        var obj = fetchShoppingList();
        
		document.getElementById("cart").innerHTML = obj.length;

	   	if ( obj.length > 0 ) {
			document.writeln( '<div class="feature">' );
   		  	document.writeln('<div class="feature-text">Your Shopping Cart</div>');
			
		   	for ( var i = 0; i < obj.length; i++) {
				document.write( '<div class="cart-item">' );
				document.write('<img class="cart-item-img" src="');
				document.writeln(obj[i].itemImageSrc);	
				document.write('" alt="');
        		document.write(obj[i].itemImageAlt);
				document.writeln('">');
	   			
	   			document.write('<div class="cart-box-model">');
				document.write(obj[i].itemDescription);
				document.writeln('</div>');

				document.write('<div class="cart-box-price">');
				document.write("$" + obj[i].itemPrice);
				document.write("<br>");
				document.writeln('<button class="cart-delete-button" type="button">Remove</button>');
				document.writeln('</div>');
				
				total += parseFloat(obj[i].itemPrice);
				document.writeln('</div> <!-- end cart-item -->');
				document.writeln('<div class="clearboth"></div>');
			}
		
	   			document.write( '<div class="cart-item">' );
				//document.write('<img class="cart-item-img" src="../images/nothing.jpg" alt="">');
				document.write('<div class="cart-item-total-text">');
				document.write("Grand Total");
				document.writeln('</div>');
				document.write('<div id="cart-box-price-total">');
				document.write("$" + total.toFixed(2));
				document.writeln('</div>');
				document.writeln('</div> <!-- end cart-item (total) -->');
				document.writeln('<div class="clearboth"></div>');
		   	
		   	document.writeln('</div>  <!-- end feature -->');

			document.writeln('<div id="checkout-buttons">');
   			document.writeln('<button id="continue-button" type="button">Continue Shopping</button>');
   			document.writeln('<button id="checkout-button" type="button">Checkout</button>');
   			document.writeln('</div>'); 
			
			var removeButtons = document.getElementsByClassName("cart-delete-button");
			for( let i = 0; i < removeButtons.length; i++ ) {
				removeButtons[i].addEventListener("click", function(){removeElement(i)});
			}
	   		

			document.getElementById("continue-button").addEventListener("click", function(){keepShopping()});
			document.getElementById("checkout-button").addEventListener("click", function(){displayForm()});
		}
   
   else {
   	   	document.writeln( '<div class="feature">' );
   		document.writeln('<div class="feature-text">Your Shopping Cart is empty</div>');
   		document.writeln( '</div>');
   	}
   	
   	
function removeElement( n ) {
	obj.splice( n, 1 );
	sessionStorage.setItem("shoppingList", JSON.stringify(obj) );
	location.reload();
}  	
	
function keepShopping() {
	location.href = "store.html";
} 

function displayForm() {
	document.getElementById("invisible").style.display = "block";

}  	
