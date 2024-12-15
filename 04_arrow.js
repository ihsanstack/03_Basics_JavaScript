/*
Arrow Functions:

    Arrow functions are a concise syntax for writing functions in JavaScript, introduced in ES6. They differ from traditional function expressions in several ways, particularly in their behavior with this.

Key Characteristics of Arrow Functions
    No this Binding
        1. Arrow functions do not have their own this. They inherit this from the surrounding (lexical) scope.
        2. This makes them particularly useful in callbacks or methods where the value of this needs to remain consistent.
*/


// Basic Syntax
const add = (a, b) => a + b; // Without curly bracket and return called implisit return


// Single parameter (parentheses optional)
const square = x => x * x  // If we use curlu brackets, we have to write the return keyword


// No Parameters (Use Empty Parentheses)
const greet = () => "Hello"


// Multiline Function Body (Use Curly Braces and return)
const multiple = (a, b) => {
    const result = a * b
    return result
}




// object return through arrow function 

const student = () => ({studentName: 'Ihsan Ullah', rollNum: 'S24-0071'})
// To return an object, "parentheses()" must be used, without "paentheses()" object is return undefine 

// console.log(student());




 // Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope (lexical scoping).

 const obj = {
    name: "Ihsna Ullah",
    id: 2471,
    email: "ihsan@google.com",
    arrowFunction: () => {
        console.log(this.email)
    },
    regularFunction: function () {
        console.log(this.email)
    },
 }
 
obj.regularFunction()
obj.arrowFunction()
 