'use strict';

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');

var app = express();

const parseServerOption = require('./config/parse-server');
var api = new ParseServer(parseServerOption);
app.use('/api', api);

const parseDashboardOption = require('./config/parse-dashboard');
var dashboard = new ParseDashboard(parseDashboardOption);
app.use('/dashboard', dashboard);

// Non-Parse web routes
app.get('/', function(req, res) {
  res.status(200).send('Oops! This is not the web page you are looking for.');
});

const port = 1337;
const httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('Server running on port ' + port + '.');
});