import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __path = fileURLToPath(import.meta.url);
const dirname = path.dirname(__path);
const Type = "utf-8";
const _fileName = "Ex.txt";

console.log("Starting script..."); // ← ADDED
console.log("Directory path:", dirname); // ← ADDED
console.log("Will create file:", path.join(dirname, _fileName)); // ← ADDED

(async function (_dir_name, _file_name, Type) {
  try {
    console.log("Creating file..."); // ← ADDED
    await fs.writeFile(path.join(_dir_name, _file_name), "Hello Node", Type);
    console.log("File Successfully created");
    console.log("Appending text..."); // ← ADDED
    await fs.appendFile(
      path.join(_dir_name, _file_name),
      " - Learning FS Module",
      Type
    );
    console.log("Appended text successfully");
    console.log("Reading file..."); // ← ADDED
    let red = await fs.readFile(path.join(_dir_name, _file_name), Type);
    console.log("File content:", red); // ← ADDED "File content:" prefix
    console.log("All operations completed successfully!"); // ← ADDED
  } catch (err) {
    console.error("Error occurred:", err); // ← Changed to console.error
  }
})(dirname, _fileName, Type);
