let express = require('express');
let app = express();
let mysql = require("./db/mysqlConnection");
require("dotenv").config();

let PORT = process.env.PORT;

//root route
app.get("/", function(req, res){
    res.send("Hello Heroku app... is this rly u???? the code is " + process.env.SuperSecret);
})

app.get("/mysql", (req, res) => {
    mysql.query("select now()", (err, rows) => {
        if(err) console.error("mysql query failed", err);
        else res.json(rows);
    })
})

app.listen(PORT, function(){
    console.log("starting app on port", PORT)
})