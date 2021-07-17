var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', function(req, res, next) {
	
	const token = generateAccessToken({ username: req.body.username });
	res.send(`{ "token": "${token}" }`);
});

const generateAccessToken = (username) => {
	return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_DURATION});
};

module.exports = router;