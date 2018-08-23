var connection = require('./connection.js');

var orm = {
    selectAll: function(tableName) {
        var query = "SELECT * FROM ??";
        connection.query(query, tableName, function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(tableName, sushiName) {
        var query = "INSERT INTO ?? (name, devoured) VALUES (?, false)"
        connection.query(query, [tableName, sushiName],  function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(tableName, eaten, id) {
        var query = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(query, [tableName, eaten, id], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;