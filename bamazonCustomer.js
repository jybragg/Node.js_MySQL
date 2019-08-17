var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");


var connection = mysql.createConnection({
    host: "localhost",

    //port
    port: 3306,

    //username
    user: "root",

    //password
    password: "root",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    afterConnection();
    search();
    //connection.end();
})

//queries here
function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //first display all of the items available for sale
        //console.log(res);
        //console.table(res);
        //search();
        //
    })
};
// var idInput;
// var quantityInput;
// var inventory;
// var updatedQuantity;
// var itemId;
// var howMany;
// The app should then prompt users with two messages.
function search() {
    inquirer.prompt({
        name: "itemId",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
    },
        //The second message asks how many units of the product they would like to buy
        {
            name: "howMany",
            type: "input",
            message: "How many units would you like?",
        })
        .then(function(answer) {

            var quantity = answer.quantity;
            var itemID = answer.id;

            connection.query('SELECT * FROM products WHERE item_id =' + itemID, function (err, selectedItem) {
                if (err) throw err;

               if (selectedItem[0].qty - quantity) {

                    console.log("iIn Stock: " + selectedItem[0].qty + " Order Quantity: " + quantity);

                    // .then(function (answer) {
                    //     console.log(answer);
                    //     input = answer.item_id;
                    //     // quantityInput = answer.stock_quantity;
                    //     console.log(input);
                    //     // console.log(quantityInpu);
                    //checkInventory();
                }
            })
       })
    }
    // function checkInventory() {
    //     connection.query("SELECT stock_quantity FROM products WHERE item_id = ? ;", [input], function (err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //         inventory = res.stock_quantity;
    //         checkAvailability();
    //     })

    //     function checkAvailability() {
    //         if (quantityInput > inventory) {
    //             console.log("Insufficient quantity!")
    //         }
    //         else if ((quantityInput < inventory) || (quantityInput === inventory)) {
    //             updateInventory();
    //         }
    //     }

    // }

    // function updateInventory() {
    //     //console.log(inventory)
    //     //console.log(quantityInput)
    //     updatedQuantity = inventory - quantityInput
    //     console.log(updatedQuantity)
    //     connection.query("UPDATE products SET ? WHERE ?", function (err, res) {
    //         if (err) throw err;
    //         console.log("You have succesfully purchased this item!")
    //         console.table(res);
    //         showUpdatedTable()
    //     })
    // }

    // function showUpdatedTable() {
    //     connection.query("SELECT * FROM products;", function (err, res) {
    //         if (err) throw err;
    //         console.table(res);
    //         connection.end();
    //     })
    // }



// var query = "SELECT item_id FROM products WHERE ?";
// connection.query(query, { item: answer.item_id }, function (err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//         console.log("Position: " + res[i].position + " || Product: " + res[i].product_name);
//     }
// })
//--------------------------------------------------------------------------------------------------------------------//
// Once the customer has placed the order, your application should CHECK if your store has enough of the product to meet
//the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

//--------------------------------------------------------------------------------------------------------------------//

