const mysql = require('mysql');
require("dotenv").config();

let pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

module.exports = pool ;