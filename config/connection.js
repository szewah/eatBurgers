let mysql = require("mysql");

const db = JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "sammy",
    password: "password",
    database: "burgers_db"
};

let connection = mysql.createConnection(db);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection made at ID " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;