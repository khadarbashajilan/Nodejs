import http from "http";

// Creates an HTTP server that serves different HTML content based on the URL.
// This server handles three main routes: home, about, and contact.
// For any other route, it serves a 404 error page.

const server = http.createServer((req, res) => {
  // Set the content type of the response to HTML
  res.setHeader("Content-Type", "text/html");
  // Check the URL of the request and serve the appropriate content

  if (req.url === "/") {
    // Set the status code to 200 (OK) and serve the home page
    res.statusCode = 200;
    serveBasicHTML(
      res,
      `<h1>Welcome to my Server</h1>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>`
    );

    // serveFile("home.html", res);
    return;
  } else if (req.url === "/about") {
    // Set the status code to 200 (OK) and serve the about page
    res.statusCode = 200;
    serveBasicHTML(
      res,
      `<h1>About page</h1>
    <a href="/">Home</a>
    <a href="/contact">Contact</a>`
    );

    // serveFile("about.html", res);
    return;
  } else if (req.url === "/contact") {
    // Set the status code to 200 (OK) and serve the contact page
    res.statusCode = 200;
    serveBasicHTML(
      res,
      ` <h1>Contact Page</h1>
    <a href="/">Home</a>
    <a href="/about">About</a>`
    );

    // serveFile("contact.html", res);
    return;
  } else {
    // Set the status code to 404 (Not Found) and serve the error page
    res.statusCode = 404;
    serveBasicHTML(
      res,
      `<h1>404</h1>
    <a href="/">Click here</a>`
    );
    // serveFile("error.html", res);
    return;
  }
});

// Starts the server and listens on port 5000.
server.listen(5000, () => {
  console.log("http://localhost:5000");
});

// Function to serve basic HTML content directly to the client.
// This function takes a response object and HTML content as arguments,
// writes the HTML content to the response, and ends the response.
function serveBasicHTML(res, htmlContent) {
  res.write(htmlContent);
  res.end();
}

// Note: This file serves as a basic HTTP server that handles routing and serves
// HTML content based on the requested URL. It currently serves static HTML content
// directly from the code. In a production environment, you might want to use a
// templating engine or a static file server to serve HTML files. Also, consider
// adding more robust error handling and logging for better debugging and monitoring.