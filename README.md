# Node.js_MySQL

## Description
This app is an Amazon-like storefront using Node and MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

1. First, the app will display all of the items available for sale. 

![Image of initial inventory](/Images/app.png)

2. Then, the app will prompt users with two messages.
    * The first asks them the ID of the product they would like to buy.
    * The second message asks how many units of the product they would like to buy.

3. Once the customer has placed the order, the application will CHECK if the store has enough of the product to meet    the customer's request.

4. If the store has enough of the product, the customer's order will be fullfilled.
    * The SQL database will update to reflect the remaining quantity.

5. If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

![Image of initial inventory](/Images/none.png)
