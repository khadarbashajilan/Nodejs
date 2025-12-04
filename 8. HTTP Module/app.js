import http from "http"
// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response status code and headers
    // Option 1: Set them separately
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');

    // Option 2: Set them together using writeHead
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send a response to the client
    res.write('<h1>Welcome to my Server!</h1>');

    // Log information about the incoming request
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);

    // End the response
    res.end();
});

// Start the server on port 5000
server.listen(5000, () => console.log("Server is running on port 5000"));