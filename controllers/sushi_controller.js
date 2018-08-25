var express = require('express');
var router = express.Router();

var sushi = require('../models/sushi.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    sushi.all(function(data) {
        var handleBarsObject = {
            sushiRolls: data
        }
        console.log(data);
        res.render("index", handleBarsObject);
    });
});

router.post('/api/rolls', function(req, res){
    sushi.insert(
        req.body.name, 
        function(result) {
            res.json({ id: result.insertId });
        }
    )
});  
  
router.put("/api/rolls/:id", function(req, res) {
    sushi.update(
        true,
        req.params.id,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export routes for server.js to use.
module.exports = router;