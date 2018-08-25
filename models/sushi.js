var orm = require('../config/orm.js');

/* An object model to utilize our ORM and run certain commands. */
var sushi = {
    all: function(cb) {
        orm.selectAll("sushi", function (res) {
            cb(res);
        })
    },
    insert: function(sushiName, cb) {
        orm.insertOne("sushi", sushiName, function (res){
            cb(res);
        })
    },
    update: function(eaten, id, cb) {
        orm.updateOne("sushi", eaten, id, function (res){
            cb(res);
        })
    }
}

module.exports = sushi;