/*
try...catch
The try...catch statement in JavaScript is used to handle errors gracefully in your code. It allows you to test a block of code for errors and handle those errors without stopping the program's execution abruptly.


Syntax:
try {
    Code that may throw an error
} catch (error) {
    Code to handle the error
}

1. try Block: Contains code that might throw an error. If an error occurs, the execution of the try block stops, and control passes to the catch block.
2. catch Block: Handles the error. It receives the error object as an argument, which provides details about the error (e.g., the error message and stack trace).


Why Use try...catch?
1. To prevent the program from crashing due to runtime errors.
2. To handle unexpected situations gracefully, such as:
    Parsing invalid JSON.
    Performing network requests that might fail.
    Accessing unavailable variables or properties.
*/

console.log("Before try and catch statement")
let x = 909
try {
    console.log(x)
} catch (error) {
    console.log("Caught an error: x is not define");
}

