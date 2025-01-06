const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); // This is the line that will cause the error if the port is already in use

console.log('Server is running on port 8080');