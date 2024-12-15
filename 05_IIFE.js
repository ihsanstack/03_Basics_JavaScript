/*
IIFE (Immediately Invoked Function Expression)

    An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that is executed immediately after it is defined. It is a common design pattern used to create a scope for variables and prevent polluting the global scope

Key Characteristics of IIFE
    1. Defined and Executed Immediately: The function is invoked right after its definition.
    2. Encapsulation: Variables defined inside an IIFE are not accessible outside of it, providing a way to avoid global scope pollution.
    3. Syntax: Typically wrapped in parentheses ( ) to differentiate it from a standard function declaration.


(function () {
    console.log("IIFE executed!")
})();

*/


// Example 1: Basic IIFE

(function () {
    let message = "Hello from IIFE!"
    console.log(message)
})();

// Output: Hello from IIFE!
// The `message` variable is encapsulated within the IIFE and cannot be accessed outside.



// Example 2: IIFE with Parameters

(function ihsan(name) {
    // name IIFE
    console.log(`Hello, ${name}!`);
})("Ihsan");

// Output: Hello, Ihsan!



const holdArrowFunc = ( () => {
    let message = "Hello, From IIFE through arrow function"
    console.log(message)
}) ();



// Example 3: Returning a Value

const result = (function () {
    let x = 23
    let y = 27
    return x + y
}());

// console.log(result) // output: 50
