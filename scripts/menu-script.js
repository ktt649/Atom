var whereIsMouse = "icon";

function init() {
    document.getElementById("icon").addEventListener("mouseover", function(){
		iconMouseover("0.5");
    });
    
    document.getElementById("cart").addEventListener("mouseover", function(){
		cartMouseover("0.5");
    });
    
    var menuItems = document.getElementsByClassName("menu-item");
    for (let i=0; i < menuItems.length; i++) {
 		menuItems[i].addEventListener("mouseover", function() {
 	    	menuItemMouseover(i, "0.5");
 		});
    }
    
    if ( sessionStorage.shoppingList) {
	   	var obj = JSON.parse(sessionStorage.getItem("shoppingList"));
	   	document.getElementById("cart").innerHTML = obj.length;
    }

 

    window.addEventListener("resize", function() {
     	if (whereIsMouse == "cart")  {
    		cartMouseover("0");
    	}
    	else if (whereIsMouse == "icon" )  {
	    	iconMouseover("0");
    	}
    	else {
    	    menuItemMouseover(parseInt( whereIsMouse[4] ), "0")
    	}
    });
}


 function fetchShoppingList() {
	var lis;
	if ( sessionStorage.shoppingList)  {
 		lis = JSON.parse(sessionStorage.getItem("shoppingList"));
 	}
 	else {
 		lis = [];
 	} 
	return lis;		 			
 }
 

function iconMouseover(v) {
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	line.style.width = (160 + "px");
	line.style.left = 0 + "px";
	whereIsMouse = "icon";
}


function cartMouseover(v) {
	var pageWrapWidth = document.getElementById("page-wrap").offsetWidth;
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	line.style.width = 68 + "px"; /*38 px for the width of the icon, 20 px for padding on the right, 10 for padding on the left*/
	line.style.left = (pageWrapWidth - 78) + "px"; 
	whereIsMouse = "cart";
	document.getElementById("underlineLoc").innerHTML = whereIsMouse;
}


function menuItemMouseover(ind,v) {
	var pageWrapWidth = document.getElementById("page-wrap").offsetWidth;
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	whereIsMouse = "item" + ind;
	line.style.width = 74 + "px";
	line.style.left = (pageWrapWidth - 78) - (74 * ( 1 + ind) ) + "px";
}

function addToShoppingList(item) { 
	var list = JSON.parse(sessionStorage.getItem("shoppingList"));

	if ( list == null ) {
		list = [];
	}
	list.push( item );
	
	var len = list.length;
	if ( len ==0 )  {
		document.getElementById("cart").innerHTML = "";
	}
	else {
		document.getElementById("cart").innerHTML = len;
	}
	sessionStorage.setItem("shoppingList", JSON.stringify(list) );
	document.getElementById("stuffIbought").innerHTML += item.itemDescription;
}

