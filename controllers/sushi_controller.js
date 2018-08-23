var express = require('express');
var router = express.Router();

var sushi = require('../models/sushi');

router.get('/', function(req, res){
    sushi.all(function(data) {
        var handleBarsObject = {
            sushiRolls: data
        };
        console.log(handleBarsObject);
        res.render('index', handleBarsObject);
    });
});

router.post('/api/sushi', function(req, res){
    sushi.insert(
        [], 
        function(result) {
            res.json({ id: result.insertId });
        }
    )
});  