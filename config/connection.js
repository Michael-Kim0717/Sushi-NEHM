var mysql = require('mysql');

/* Using localhost as a connection base. */
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "sushi_db"
});

/* Connect to our localhost.
    Provide Error if connection fails.
    Provide Message if connection succeeds.
 */
connection.connect(function(err){
    if (err){
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected with ID " + connection.threadId);
})

/* Export Connection to be used elsewhere */
module.exports = connection;