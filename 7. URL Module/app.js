// Import the URL class from the 'url' module
import { URL } from 'url';

// Create a new URL object with a sample URL string
const myURL = new URL('https://example.com/products?category=phones&sort=price');

// Log basic URL information
console.log('Hostname:', myURL.hostname);
console.log('Pathname:', myURL.pathname);
console.log('Original search parameters:', myURL.searchParams);

// Update the 'sort' parameter to 'rating' if it exists

// Iterate through each search parameter
// myURL.searchParams.forEach((value, name, searchParams) => {
//     // Check if the parameter name is 'sort'
//     if(name === 'sort'){
//         // Remove the 'sort' parameter
//         searchParams.delete(name);
//         // Set a new parameter with the same name but different value
//         searchParams.set(name, 'rating');
//     }
// });

//OR

if (myURL.searchParams.has('sort')) {
    myURL.searchParams.set('sort', 'rating');
}


// Log the updated search parameters
console.log('Updated search parameters:', myURL.searchParams);

