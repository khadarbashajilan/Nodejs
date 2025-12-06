import EventEmitter from "events";

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`Name : ${name} \t Id : ${id}`)
})

customEmitter.once('something', (name)=>{
    console.log(`Welcome to nodejs events, ${name}`)
})

customEmitter.emit('response', "Khadar", "034")
customEmitter.emit('response', "Max", "001")

customEmitter.emit('something', "Max")
customEmitter.emit('something', "Thorfin")

// Note: The EventEmitter class in Node.js is used to handle events.
// Events are a way to communicate between different parts of an application.
// The 'on' method is used to register a listener for an event.
// The 'emit' method is used to trigger an event.
// The 'once' method is used to register a listener that will only be called once.
// Events are useful for handling asynchronous operations, such as reading from a file or making a network request.
// They can also be used to decouple different parts of an application, making it easier to maintain and extend.