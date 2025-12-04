// Import the 'os' module to access operating system-related utility methods and properties
import os from "os"

// Log the host name of the operating system
console.log(`Host name : ${os.hostname()}`)

// Log the total amount of system memory in bytes
console.log(`Total memory : ${os.totalmem()}`)

// Log the amount of free system memory in bytes
console.log(`Free memory : ${os.freemem()}`)

// Log the system uptime in seconds
console.log(`System uptime : ${os.uptime()}`)

// Log information about each logical CPU core
console.log(`CPU info : ${JSON.stringify(os.cpus())}`)

// Log the operating system name
console.log(`OS version : ${os.version()}`)

// Log the operating system platform
console.log(`OS platform : ${os.platform()}`)