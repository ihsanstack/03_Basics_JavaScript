/*
Function:
    A function in JavaScript is a reusable block of code designed to perform a specific task. Functions help in organizing code, making it modular, and avoiding redundancy by enabling reusability.

Defining a Function
    There are multiple ways to define a function in JavaScript:

    1. Function Declaration
    2. Function Expression
    3. Arrow Function
    4. Anonymous Function
    5. IIFE (Immediately Invoked Function Expression)

*/

function greeting(name) {
    return `Hello ${name}`;
}
// This is a function declaration named "greeting".
// It takes one parameter, "name", and returns a string `Hello <name>`
// where <name> is replaced by the value passed to the function.

greeting; // referance of the function
// This refers to the function itself but does not invoke it.
// It will not produce any output or perform any action.

greeting(); // execution of the function
// This invokes the "greeting" function but without passing any argument.
// Since "name" is undefined, it will return "Hello undefined" as output.

console.log(greeting("Ihsan"));
// This invokes the "greeting" function with "Ihsan" as the argument.
// The function returns "Hello Ihsan", which is then logged to the console.





function addTwoNums(num1, num2) {
    console.log(num1 + num2);
    // This function adds num1 and num2 and logs the result to the console.
    // However, it does not have a `return` statement, so it implicitly returns `undefined`.
}

// addTwoNums(12, 10)
// This line is commented out, so it won't execute.

// const result = addTwoNums(12, 10);
// Here, the function is called with arguments 12 and 10.
// It logs 22 to the console because of the `console.log` inside the function.
// Since the function doesn't return anything, the value of `result` is `undefined`.

// console.log(result);
// This logs the value of `result`, which is `undefined`.




function addNums(n1, n2) {
    let result =  n1 + n2
    return result 
}

// addNums(12, 10) // No response (empity)
// console.log(addNums(12, 10)) // 22



function loginUserMessage(user) {
    return `${user} is just log in`
}

const printMessage = loginUserMessage("Ihsan")
// console.log(printMessage)
// console.log(loginUserMessage("")) // output: is just log in
// console.log(loginUserMessage()) // undefine



// Default parameters
// You can provide default values for parameters.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// console.log(greet()); // Output: "Hello, Guest!"
// console.log(greet("Ihsan")); // Output: "Hello, Ihsan!"





// Multiple values pass through function

function calculateCardPrice(...nums) {  
    // The rest operator (...) collects all arguments into an array called nums.
    return nums;
    // Returns the array nums containing all the arguments passed to the function.
}

const totallCardPrice = calculateCardPrice(200, 100, 400, 50);
// Calls the function with multiple arguments and stores the resulting array in totallCardPrice.

// console.log(totallCardPrice);
// Logs the array [200, 100, 400, 50] to the console.




const user = {
    username: "Ihsan",
    userEmail: "ihsan@google.com"
};
// Creates an object "user" with properties "username" and "userEmail".

function objectHandlor(anyObject) {
    console.log(`User name is ${anyObject.username} and email is ${anyObject.userEmail}`);
    // Logs the "username" and "userEmail" properties of the passed object.
}

// objectHandlor(user);
// Calls the function "objectHandlor", passing the "user" object as an argument.



objectHandlor({
    username: "Imran",
    userEmail: "imran@google.com"
});
// Directly passes an object to the "objectHandlor" function as an argument.
// The object has properties "username" with the value "Imran" and "userEmail" with the value "imran@google.com".

// The function will log:
// "User name is Imran and email is imran@google.com"
// The function dynamically accesses the properties of the passed object and uses them in the output message.





// Array pass through an arary 

const arr = [200, 800, 300, 500];
// Creates an array "arr" with four numeric elements: 200, 800, 300, and 500.

function returnThirdValue(getArray) {
    return getArray[2];
    // The function takes an array as input and returns the value at the 3rd position (index 2).
}

const result = returnThirdValue(arr);
// Calls the "returnThirdValue" function, passing "arr" as the argument.
// The returned value (300, the element at index 2 of "arr") is stored in "result".

// console.log(result);
// Logs the value of "result" (300) to the console.



// Directly passes an array to the "returnThirdValue" function as an argument.

console.log(returnThirdValue([200, 800, 300, 100]))