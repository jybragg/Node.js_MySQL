var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    //port
    port: 3306,

    //username
    user: "root",

    //password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    //to test connection
    //console.log("connected as id " + connection.threadId) 
    inventory(search);
});

var inventory = function (invTable) {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        invTable();
    })
};

var search = function () {
    inquirer.prompt([
        {
            name: "choice",
            type: "input",
            message: "What is the item you woukd like to buy? Enter item id:"
        },
        {
            name: "ChosenAmount",
            type: "input",
            message: "How many would you like to buy?"
        }
    ]).then(function (answer) {

        var userChoice = answer.choice;
        var quantity = parseInt(answer.ChosenAmount);

        connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [userChoice], function (err, data) {
            if (err) throw err;

            var amtNum = data[0].stock_quantity;
            var newAmt = amtNum - quantity;

            if (newAmt >= 0) {
                connection.query("UPDATE products SET ? WHERE ?",
                    [{ stock_quantity: newAmt },
                    { item_id: userChoice }],
                    function (err, res) {
                        if (err) throw err;
                        console.log("Your order has been placed for: " + quantity + " \nNow there are only " + newAmt + " available")
                    });
            }
            else {
                console.log("Insufficient Quantity!");
            };
            connection.end();
        });
    });
};