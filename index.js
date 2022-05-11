const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
	return res.send('Hello World!');
});

app.get('/world', function (req, res) {
	return res.send('Hello World!');
});

module.exports.handler = serverless(app);
