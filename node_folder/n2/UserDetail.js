var http = require('http');
const user = require('./userfile');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(user.getName() + ' lives in ' + user.getLocation() + ' and was born on ' + user.dob);
    res.end();
}).listen(8080);