/**
 * Created by willi on 12/5/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', { title: "About" });
});

module.exports = router;
