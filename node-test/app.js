const http = require('http');
const port = 9000;

  const server = http.createServer((request, response) =>{
  response.write('Hello World!');
  response.end('\n'); // end of the response flow.
  // the two lines can be merged as one:
  // response.end('Hello, World!\n');
});

server.listen(port); // listening on 9000
