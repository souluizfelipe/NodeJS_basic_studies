const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);

  res.end('hello world');
});

server.listen(8080);
console.log("working....")