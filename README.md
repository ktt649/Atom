# Atom Store

A project assignment given in a Web Programming class at the University of Saskatchewan.
Fictional e-commerce store. The front end for this project was supplied to me. My task was to implement a back-end for the store. The back-end developed in PHP, Javascript and MYSQL using MVC design pattern and RESTful API architecture.
The site features a fully functioning store page, including filtering by manufacturers. 
The store is connected to the checkout page where the user can check-out by filling the form, which saves the users purchase history to the database. 

This project was designed using XAMPP apache web server, and managed with phpmyadmin. I invite you to follow these instructions to use the demo for yourself.

Assuming XAMMP is already downloaded onto your system:
1. Download the project file into ../Applications/XAMPP/xamppfiles/htdocs *NOTE, your path may be different*
2. Start XAMMP Servers
3. Open your browser and go to: http://localhost/phpmyadmin/
4. Create a new DataBase, name it "Atom_Products"
5. Click on "Atom_Products" on the left pannel, this will open the dashboard for this database
6. Select Import from the top nav bar.
7. Under "File to Import" select "Choose File"
8. Navigate to XAMPP/xamppfiles/htdocs/Atom/sql and select "Products.sql"
9. Select "Go" from the bottom of the page. Assuming everything worked, phpmyadmin has now created all of the SQL tables for the Atom_Products database
10. In your browser, go to http://localhost/Atom/ 
11. Enjoy using the demo.
	
If you wish to test the customer database, simply add as many items to the cart as you wish, Select "Checkout" and fill out the form with your information.
To see the updated Customer and Transactions databases:
1. Go to http://localhost/phpmyadmin/ 
2. Select "Atom_Products" from the left pane as you did before.
3. You will now see 3 tables, "Customers", "Products", and "Transactions"
4. Feel free to explore the databases, and the effects of new checkouts as new customers, and the same customer.
	

Thank you for downloading my project.
