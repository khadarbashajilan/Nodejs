// 1. Module Wrapper

// Import the 'log' function from the './logger.js' module
// This function is used to log messages to the console
import log from "./logger.js";

// Import the 'fileURLToPath' function from the 'url' module
// This function is used to convert a file URL to a path
import { fileURLToPath } from 'url';

// Import the 'dirname' function from the 'path' module
// This function is used to get the directory name of a path
import { dirname } from 'path';

// Convert the current module's URL to a file path
// This is necessary because in ES modules, __dirname and __filename are not available by default
const __dirname = fileURLToPath(import.meta.url)

// Get the directory name of the current module's URL
// This is used to get the directory path of the current module
const __filename = dirname(import.meta.url)

// Log the directory path of the current module to the console
// This is used to verify that the directory path is correct
log(__dirname);
// [LOG]: f:\Backend Tutorials\Backend\Notes\1. Module Wrapper\app.js

// Log the URL of the current module to the console
// This is used to verify that the module URL is correct
log(__filename);
// [LOG]: file:///f:/Backend%20Tutorials/Backend/Notes/1.%20Module%20Wrapper