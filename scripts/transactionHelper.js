//Writes Hidden objects to form
var obj = fetchShoppingList();
	document.write('<input type="hidden" name="itemCount" value="');
	document.writeln(obj.length);
	document.writeln('">');
	for(var i=0; i<obj.length; i++)
	{
		document.write('<input type="hidden" value="');
		document.writeln(obj[i].itemDescription);
		document.write('" name="prodName');
		document.write(i);
		document.writeln('">');
		
		document.write('<input type="hidden" value="');
		document.writeln(obj[i].itemPrice);
		document.write('" name="prodPrice');
		document.write(i);
		document.writeln('">');
		
	}