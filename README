#NODE ACL-CertAuth - Simple Client Certificate Wrapper for Node_ACL

A simple wrapper to the node_acl module for implementing client certificate authentication
  
Please see: https://github.com/OptimalBits/node_acl/

This is a very, very simple approach and you would most likely be better served with PassportJS with an appropriate certificate strategy, a fully flegded logger and far more complex error handling; this is for rough and ready development purposes only.

Evolution may come in time.

##Features

- Client certificate authentication parsing (Client Cert CN-to-req.session.userId)
- SimpleLogger
- ErrorHandler

##Installation

Using npm:

```javascript
npm install acl-certauth
```

##Example

```javascript

const EXPRESS_PORT = 3000;

// CORE MODULES
var https       = require('https');
var app         = require('express')();
var fs          = require('fs');
var acl         = require('acl');
var aclCertAuth = require('acl-certauth');

acl = new acl(new acl.memoryBackend(),aclCertAuth.simpleLogger);
acl.allow('allRoles','/','get');
acl.allow('admins',['/adminapi','/adminapi/'],'get');
acl.allow('users' ,['/userapi','/userapi/']  ,'get');

acl.addUserRoles('user1','admins');
acl.addUserRoles('user2','users');

acl.addRoleParents('admins','allRoles');
acl.addRoleParents('users','allRoles');

// MIDDLEWARE
app.use(aclCertAuth.authenticate);
app.use(acl.middleware());
app.use(aclCertAuth.errorHandler);

// ROUTES
app.get('/', 			index);
app.get('/adminapi', 	adminapi);
app.get('/userapi', 	userapi);

// ROUTEHANDLERS (kept here for testing)
function index (req, res){
    res.send('User: ' + req.session.userId);
}

function adminapi (req, res){
    res.send('admin service');
}

function userapi (req, res){
    res.send('user service');
}

// WEB SERVER START
var httpsConfig = {
  host: 				"your_hostname_must_match_server_cert", 
  pfx:                fs.readFileSync(__dirname + '/config/certs/server_cert_and_key.pfx'),
  ca: 				[ fs.readFileSync(__dirname + '/config/certs/issuing_ca.cert') ],
  requestCert:        true,
  rejectUnauthorized: true
}

https.createServer(httpsConfig, app).listen(EXPRESS_PORT);
```

## Future work

- AD/LDAP integration

##License
CC-BY-SA