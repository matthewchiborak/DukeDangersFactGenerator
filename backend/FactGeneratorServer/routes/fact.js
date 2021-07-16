var express = require('express');
var router = express.Router();

var factCount = 1;

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('{ "id": 1, "text": "Test fact until set up database" }');
});*/

router.post('/', function(req, res, next) {
	res.send('{ "id": ' + factCount.toString() + ', "text": "The ' + req.body.name + ' is cool" }');
	factCount++;
});

module.exports = router;