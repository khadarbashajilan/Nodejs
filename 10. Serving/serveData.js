import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serves a file to the client.
export function serveFile(file, res) {
  // Get the path of the file to be served
  const filePath = path.join(__dirname, file);
  // Read the file and handle the response
  fs.readFile(filePath, (err, data) => {
    handleFileResponse(data, err, res);
  });
}
// Handles the response for a file.
export function handleFileResponse(data, err, res) {
  if (err) {
    console.error(err);
    // Set the status code to 500 (Internal Server Error) and send an error message
    res.statusCode = 500;
    res.write("<h1>Internal Server Error</h1>");
    res.end();
  } else {
    // Send the data in the response
    res.write(data);
    res.end();
  }
}

// Note: The handleFileResponse function is called before it is defined in the serveFile function.
// This works because function declarations are hoisted to the top of their scope in JavaScript.
// This means that the handleFileResponse function is available in the scope of serveFile before the function is actually defined.
// This is why the code works as expected and the handleFileResponse function is called successfully.