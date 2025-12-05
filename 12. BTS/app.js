import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __fileDir = path.dirname(fileURLToPath(import.meta.url));

//Behavious Of Nodejs :
console.log("Start");
const data = fs.readFileSync(path.join(__fileDir, "text.txt"), "utf8");
console.log(data);
console.log("End");

console.log("--------------------------*------------------------------")

console.log("Start");
fs.readFile("./Notes/12. BTS/text.txt", (err, res)=>{
    err ? console.log(err) : console.log(res.toString())
})
console.log("End")

// Note: The first part of the code uses synchronous file reading with fs.readFileSync.
// This means Node.js will wait for the file to be read before moving on to the next line of code.
// This is why "Start", the file content, and "End" are logged in order.

// The second part of the code uses asynchronous file reading with fs.readFile.
// This means Node.js will not wait for the file to be read and will move on to the next line of code immediately.
// This is why "Start" and "End" are logged first, and the file content is logged last.

// The difference in behavior is due to the synchronous vs. asynchronous nature of the file reading functions.
// Synchronous functions block the event loop, while asynchronous functions do not.