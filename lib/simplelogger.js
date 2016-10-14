/**
  A simple wrapper to the node_acl module for implementing client certificate authentication
  
  The 'simpleLogger' method is to provide a really, really, simple logger for node_acl
  purposes. This should only be used for evaluation purposes... use a real logging module
  for anything more.

  var acl         = require('acl');
  var aclCertAuth = require('acl-certauth');
  acl = new acl(new acl.memoryBackend(),aclCertAuth.simpleLogger);
*/
var simpleLogger = {
	debug: function(text){ console.log(text); }
}

// Default export
module.exports = simpleLogger;