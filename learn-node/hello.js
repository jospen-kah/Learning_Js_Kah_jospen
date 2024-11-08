const http = require('http');
const upper = require('upper-case');



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/html '});
  res.write(upper.upperCase("Hello World!"));
  res.end();
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    
});