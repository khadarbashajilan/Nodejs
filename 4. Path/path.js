import path from 'path'
import { fileURLToPath } from 'url';

const __filePath = fileURLToPath(import.meta.url)
console.log(`Full Path : ${__filePath}`)

console.log(`File name : ${path.basename(__filePath)}`)

console.log(`Dir name : ${path.dirname(__filePath)}`)

console.log(`joined : ${path.join(path.dirname(__filePath), path.basename(__filePath))}`)

console.log(`Ext name : ${path.extname(__filePath)}`)

console.log(`Path normalizer : ${path.normalize(path.dirname(__filePath)+"///xyz.js")}`)