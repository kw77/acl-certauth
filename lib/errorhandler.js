/**
  A simple wrapper to the node_acl module for implementing client certificate authentication
  
  The 'errorhandler' method is to intercept and tidy up acl HttpError states from middleware.
  It is expecting to be returned via AJAX queries, rather than direct user web requests.
*/
function errorhandler(err, req, res, next) {
	if(err && err.name && err.name == 'HttpError'){
		res.status(err.errorCode).send(err.message);
	}else{
		next()
	}
}

// Default export
module.exports = errorhandler;