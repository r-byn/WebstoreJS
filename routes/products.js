var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('products', { title: "Robyn's Creations" });
});

module.exports = router;
