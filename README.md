# Node.js_MySQL

##Description




1. First, display all of the items available for sale. 




2. Then, the app should then prompt users with two messages.
   
    * The first should ask them the ID of the product they would like to buy.

    * The second message should ask how many units of the product they would like to buy.

3. Once the customer has placed the order, your application should CHECK if your store has enough of the product to meet    the customer's request.

4. If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

5.  However, if your store _does_ have enough of the product, you should fulfill the customer's order.
    * This means updating the SQL database to reflect the remaining quantity.
    * Once the update goes through, show the customer the total cost of their purchase.