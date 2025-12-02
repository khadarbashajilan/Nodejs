import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __path = fileURLToPath(import.meta.url);
const dirname = path.dirname(__path);
const Type = "utf-8";
const _fileName = "Ex.txt";

console.log("Starting script...");
console.log("Directory path:", dirname);
console.log("Will create file:", path.join(dirname, _fileName));

try {
  console.log("Creating file...");
  
  // Synchronous writeFile
  fs.writeFileSync(path.join(dirname, _fileName), "Hello Node", Type);
  console.log("File Successfully created");
  
  console.log("Appending text...");
  
  // Synchronous appendFile
  fs.appendFileSync(
    path.join(dirname, _fileName),
    " - Learning FS Module",
    Type
  );
  console.log("Appended text successfully");
  
  console.log("Reading file...");
  
  // Synchronous readFile
  const data = fs.readFileSync(path.join(dirname, _fileName), Type);
  console.log("File content:", data);
  
  console.log("All operations completed successfully!");
  
} catch (err) {
  console.error("Error occurred:", err);
}