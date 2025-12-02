// Import the 'fs' module to perform file operations
import fs from "fs";

// Import the 'path' module to handle and transform file paths
import path from "path";

// Import the 'fileURLToPath' function from the 'url' module to convert a file URL to a path
import { fileURLToPath } from "url";

// Convert the current module's URL to a file path
const __path = fileURLToPath(import.meta.url);

// Get the directory name of the current module's URL
const dirname = path.dirname(__path);

// Define the file encoding and name
const Type = "utf-8";
const _fileName = "Ex.txt";

// Log the start of the script
console.log("Starting script...");

// Log the directory path and the file path that will be created
console.log("Directory path:", dirname);
console.log("Will create file:", path.join(dirname, _fileName));

// Log that the file creation process is starting
console.log("Creating file...");

// Create a file named 'Ex.txt' with the content 'Hello Node' using the 'fs.writeFile' function
// This function takes a file path, content, encoding type, and a callback function as arguments
fs.writeFile(path.join(dirname, _fileName), "Hello Node", Type, (err) => {
  // If an error occurs during the file creation process, log the error and return
  if (err) {
    console.error("Error creating File : ", err);
    return;
  }
});

// Log that the file has been successfully created
console.log("File Successfully created");

// Log that the text appending process is starting
console.log("Appending text...");

// Append the text ' - Learning FS Module' to the file 'Ex.txt' using the 'fs.appendFile' function
// This function takes a file path, content, encoding type, and a callback function as arguments
fs.appendFile(
  path.join(dirname, _fileName),
  " - Learning FS Module",
  Type,
  (err) => {
    // If an error occurs during the text appending process, log the error and return
    if (err) {
      console.error("Error appending to file: ", err);
      return;
    }

    // Log that the text has been successfully appended to the file
    console.log("Appended text successfully");

    // Log that the file reading process is starting
    console.log("Reading file...");
  }
);

// Read the content of the file 'Ex.txt' using the 'fs.readFile' function
// This function takes a file path, encoding type, and a callback function as arguments
fs.readFile(path.join(dirname, _fileName), Type, (err, data) => {
  // If an error occurs during the file reading process, log the error and return
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Log the content of the file
  console.log("File content:", data);

  // Log that all operations have been completed successfully
  console.log("All operations completed successfully!");
});