import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome  </h1>");
});
server.listen(8000, () => console.log("Started"));


// Nodemon package:

/**
 * Nodemon: Auto-restart utility for Node.js apps
 *
 * Features:
 * - Auto-restarts on file changes
 * - Watches specified files/directories
 * - Extensible with plugins
 * - Configurable via CLI or config file
 *
 * Installation:
 * Already installed as devDependency (see package.json)
 * Install globally: npm install -g nodemon
 * Install locally: npm install --save-dev nodemon
 *
 * Usage:
 * Run with: npm run dev
 */ 