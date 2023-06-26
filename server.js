const https = require('https');
const fs = require('fs');

const options = {
    requestCert: true,
    rejectUnauthorized: true,
    ca: fs.readFileSync('ca.crt'),
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key'),
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(4000);  