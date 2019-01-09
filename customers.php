
<!DOCTYPE html>
<html>
<head>
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
 	<title>Checkout</title>
 	<link rel=stylesheet type="text/css" href="./styles/style-main.css">
 	<link rel=stylesheet type="text/css" href="./styles/style-checkout.css">
  	<script src="./scripts/menu-script.js"></script>
  	<script src="./scripts/catalog.js"></script>
   <?php
   //PHP file that does the database work
	require_once("./php/work.php");
   //Practice
   //require_once("./php/database.php");
    ?>


</head>
<body onload="init()">
	<div id="page-wrap">
		<nav>
			<ul>
  				<li id="icon"><a href="index.html"><img src="./images/atom-logo.png" alt="logo"></a></li>
				<a href="checkout.html"<li id="cart"></li></a>
  				<li class="menu-item"><a href="contact.html">Contact</a></li>
  				<li class="menu-item"><a href="store.html">Store</a></li>
  				<li class="menu-item"><a href="about.html">About</a></li>
  				<li id="underline"></li>
			</ul>
		</nav>
	
		<div class="header-banner-store">
			<div class="banner-text-heading-store">New fall devices have arrived.</div>
		</div>
     	<div class="feature-text">Thanks for Shopping!</div>
     	<script src="./scripts/displayCart.js"></script>
		
		<form id="invisible" action = "./customers.php" method = "post">			
			<label>Name*</label> 
  			<input name ="name" type="text"> 
  			<label>Street Address*</label>
  			<input name = "address" type="text" value = "default street"> 
  			<label>City, Postal Code*</label>
  			<input name = "city" type="text" value = "city name">
  			<label>Province or Territory</label>
  			<select name = "province">
    			<option>Alberta</option>
    			<option>British Columbia</option>
    			<option>Manitoba</option>
    			<option>New Brunswick</option>
    			<option>Newfoundland and Labrador</option>
    			<option>Nova Scotia</option>
    			<option>Ontario</option>
    			<option>Prince Edward Island</option>
    			<option>Quebec</option>
    			<option>Saskatchewan</option>
    			<option>Northwest Territories</option>
    			<option>Nunavut</option>
   		 		<option>Yukon</option>
  			</select>
  			<label>Email*</label>
  			<input name = "email" type="text" value = "defaultemail@default.com">
  			<label>Credit Card Number*</label>
  			<input name = "creditCard" type="text" value = "1234567890">
  			<label>Message (optional)</label>
  			<textarea name = "message"></textarea>
  			<!--Assignment 3 script -->
		<script src="./scripts/transactionHelper.js"></script>
  			<input type="submit" value="Place Order"></input>
		</form>

   		
   		<div class="footer-store"> 
   			<ul class="footer-list">
				<li id="follow">Follow Us:</li>
				<li class="social"><a href="#facebook"><img src="images/icons/icon_facebook.png" alt="facebook"></a>
				<li class="social"><a href="#twitter"><img src="images/icons/icon_twitter.png" alt="twitter"></a>
				<li class="social"><a href="#google"><img src="images/icons/icon_google.png" alt="google"></a>
				<li class="footer-menu-item"><a href="contact.html">Contact</a></a>
				<li class="footer-menu-item"><a href="store.html">Store</a>
				<li class="footer-menu-item"><a href="about.html">About</a>
			</ul>
			<p>&#x40; 2016 Atom Ltd. All Rights Reserved.
   		</div> <!-- end of .footer -->
	
	</div> <!-- end #page-wrap -->

</body>
</html>