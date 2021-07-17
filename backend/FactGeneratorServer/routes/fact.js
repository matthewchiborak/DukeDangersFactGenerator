var express = require('express');
var router = express.Router();

var factCount = 1;

router.post('/', (req, res, next) => {	
	res.send('{ "id": ' + factCount.toString() + ', "text": "The ' + req.body.name + ' is cool" }');
	factCount++;
});

module.exports = router;