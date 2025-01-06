const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();

//Error handling for EADDRINUSE 
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose another port or stop the existing process.`);
    process.exit(1); // Exit the process with a non-zero code to indicate failure
  } else {
    console.error(`An unexpected error occurred: ${err.message}`);
    process.exit(1);
  }
});