import http from "http";
import { serveFile } from "./serveData.js";

// Creates an HTTP server that serves different HTML files based on the URL.

const server = http.createServer((req, res) => {
  // Set the content type of the response to HTML
  res.setHeader("Content-Type", "text/html");
  // Check the URL of the request and serve the appropriate file

  if (req.url === "/") {
    // Set the status code to 200 (OK) and serve the home page
    res.statusCode = 200;
    serveFile("home.html", res);
    return;

  } else if (req.url === "/about") {
    // Set the status code to 200 (OK) and serve the about page
    res.statusCode = 200;
    serveFile("about.html", res);
    return;

  } else if (req.url === "/contact") {
    // Set the status code to 200 (OK) and serve the contact page
    res.statusCode = 200;
    serveFile("contact.html", res);
    return;

  } else {
    // Set the status code to 404 (Not Found) and serve the error page
    res.statusCode = 404;
    serveFile("error.html", res);
    return;
  }
});

// Starts the server and listens on port 5000.
server.listen(5000, () => {
  console.log("http://localhost:5000");
});
