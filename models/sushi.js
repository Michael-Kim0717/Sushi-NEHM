var orm = require('../config/orm');

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