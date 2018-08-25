var connection = require('./connection.js');

/* ORM Object that allows us to navigate through our database (select, insert, update) */
var orm = {
    /* Select from tablename */
    selectAll: function(tableName, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, tableName, function(err, result){
            if (err) throw err;
            cb(result); 
        })
    },
    /* Insert a new roll into database */
    insertOne: function(tableName, sushiName) {
        var query = "INSERT INTO ?? (name, devoured) VALUES (?, false)"
        connection.query(query, [tableName, sushiName],  function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    /* If devoured or not, update the table row */
    updateOne: function(tableName, eaten, id) {
        var query = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(query, [tableName, eaten, id], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

/* Export ORM to be used elsewhere */
module.exports = orm;