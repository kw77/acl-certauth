/**
  A simple wrapper to the node_acl module for implementing client certificate authentication
  
  The 'authenticate' method is an ExpressJS middleware functino for taking (valid) certificate
  CNs and adding them to the req[uest].session.userId field for node_acl purposes.


  COULD: Add an optional CN regex-based transform to userId

  REMEMBER: This will require full HTTPS client connectivity, such as with:

  var httpsConfig = {
	host: 				"your_hostname_must_match_server_cert", 
    pfx:                fs.readFileSync(__dirname + '/config/certs/server_cert_and_key.pfx'),
    ca: 				[ fs.readFileSync(__dirname + '/config/certs/issuing_ca.cert') ],
    requestCert:        true,
    rejectUnauthorized: true
  }

  https.createServer(httpsConfig, app).listen(EXPRESS_PORT);
*/
function authenticate(req,res,next){
    var peerCert = req.connection.getPeerCertificate();
    var err;

    if(peerCert && peerCert.subject && peerCert.subject.CN){
    	if(!req.session){ req.session = {}; }
        req.session.userId = req.connection.getPeerCertificate().subject.CN;
    }else{
		err = new HttpError(401, 'User not authenticated');
    }
    next(err);
}

// Default export
module.exports = authenticate;