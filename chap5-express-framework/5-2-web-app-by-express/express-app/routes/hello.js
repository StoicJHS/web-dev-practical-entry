var express = require('express');
var router = express.Router();

let opt = {
    title: 'Hello',
    message:'This is a new page.'
}

router.get('/', function(req, res, next) {
    res.render('hello', opt);
});

module.exports = router;