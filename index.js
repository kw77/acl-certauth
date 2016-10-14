/**
  A simple wrapper to the node_acl module for implementing client certificate authentication
  
  Please see: https://github.com/OptimalBits/node_acl/

  This is a very, very simple approach and you would most likely be better served with
  PassportJS with an appropriate certificate strategy, a fully flegded logger and far
  more complex error handling; this is for rough and ready development purposes only.

  Evolution may come in time.
*/
'use strict';

var authenticate = require('./lib/authenticate');
var errorHandler = require('./lib/errorhandler');
var simpleLogger = require('./lib/simplelogger');

exports.authenticate = authenticate;
exports.errorHandler = errorHandler;
exports.simpleLogger = simpleLogger;