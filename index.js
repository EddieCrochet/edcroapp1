let express = require('express');
let app = express();
require("dotenv").config();

let PORT = process.env.PORT;

app.get("/", function(req, res){
    res.send("Hello Heroku app... is this rly u???? the code is " + process.env.SuperSecret);
})

app.listen(PORT, function(){
    console.log("starting app on port", PORT)
})