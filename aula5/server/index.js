const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('../client/index.html', (error, content) => {
    res.end(content);
  })

})

server.listen(8080);
console.log("working....");