function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}

// Export the 'add' and 'sub' functions as an object
// This allows other modules to import and use these functions
module.exports= {add,sub}
