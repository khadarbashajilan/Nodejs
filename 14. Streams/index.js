import fs, {createReadStream} from "fs"
import { fileURLToPath } from "url";
import path from "path";
const __fileDir = path.dirname(fileURLToPath(import.meta.url));

// Create a file with 5001 lines of numbers
for(let i=0; i<5001; i++){
    fs.writeFileSync(path.join(__fileDir, "text.txt"),`${i}\n`, {flag:'a'});
}

// Create a readable stream from the text.txt file
// const stream = createReadStream(path.join(__fileDir, 'text.txt'))
const stream = createReadStream(path.join(__fileDir, 'text.txt'), 'utf8')

// Register a listener for the 'data' event on the stream
stream.on('data', (data)=>{
    // Log the data to the console
    console.log(data)
})

/**
 * Documentation for the Stream module and writeFileSync
 *
 * Stream module:
 * The Stream module in Node.js provides an API for working with streaming data.
 * Streams are useful for handling large amounts of data efficiently, as they allow data to be processed in chunks rather than all at once.
 * There are four types of streams in Node.js: Readable, Writable, Duplex, and Transform.
 * Readable streams are used for reading data, Writable streams are used for writing data, Duplex streams can do both, and Transform streams are a type of Duplex stream that can modify or transform the data as it is written and read.
 *
 * writeFileSync:
 * The writeFileSync function from the fs module is used to write data to a file synchronously.
 * It takes three arguments: the path to the file, the data to be written, and an options object.
 * The options object can include properties such as flag, which specifies how the file should be opened, and encoding, which specifies the character encoding to use.
 * The flag property can be set to 'a' to append data to the file if it already exists, or 'w' to write data to the file, overwriting any existing data.
 * The encoding property can be set to 'utf8' to write the data as a UTF-8 encoded string, or 'hex' to write the data as a hexadecimal string.
 *
 * Other available options for writeFileSync:
 * - mode: The file mode (permissions) to set for the file.
 * - signal: An AbortSignal that can be used to cancel the operation.
 * - flush: Whether to flush the file to disk after writing.
 * - fsync: Whether to force the file to be written to disk before the function returns.
 *
 * createReadStream:
 * The createReadStream function from the fs module is used to create a readable stream from a file.
 * It takes two arguments: the path to the file and an options object.
 * The options object can include properties such as encoding, which specifies the character encoding to use, and highWaterMark, which specifies the size of the buffer used to read the file.
 * The encoding property can be set to 'utf8' to read the file as a UTF-8 encoded string, or 'hex' to read the file as a hexadecimal string.
 * The highWaterMark property can be set to a number to specify the size of the buffer used to read the file.
 *
 * Other available options for createReadStream:
 * - flags: The file mode (permissions) to set for the file.
 * - autoClose: Whether to close the file descriptor when the stream is closed.
 * - emitClose: Whether to emit the 'close' event when the stream is closed.
 * - start: The position in the file to start reading from.
 * - end: The position in the file to stop reading from.
 */