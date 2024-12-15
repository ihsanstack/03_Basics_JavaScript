/*
Scope:
    Scope determines the accessibility of variables, functions, and objects in different parts of your code. It defines where a variable is declared and where it can be accessed.

Types of Scope
    1. Global Scope
    2. Local Scope
        Function Scope
        Block Scope (ES6 introduced let and const)

1. Global Scope
    Variables declared outside of any function or block are in the global scope.
    Global variables are accessible anywhere in your code.
    Best Practice: Avoid too many global variables as they increase the risk of name conflicts.
*/

let globalVar = "I am global"; // Global variable

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}

// showGlobalVar(); // Output: "I am global"
// console.log(globalVar); // Output: "I am global"





/*
2. Local Scope
    Variables declared inside a function or block are local to that function or block.
    Local variables are not accessible outside the function or block where they are declared.
*/

// a) Function Scope
// Variables declared with var, let, or const inside a function are only accessible within that function.

function myFunction() {
    let localVar = "I am local"; // Local variable
    console.log(localVar); // Accessible here
}

// myFunction(); // Output: "I am local"
// console.log(localVar); // Error: localVar is not defined



// b) Block Scope (Introduced with let and const)
// Variables declared with let or const inside a block ({}) are limited to that block.
// Variables declared with var do not have block scope; they are function-scoped.

{
    let blockScoped = "I am block scoped";
    const anotherBlockScoped = "Me too!";
    // console.log(blockScoped); // Accessible here
    // console.log(anotherBlockScoped); // Accessible here
}

// console.log(blockScoped); // Error: blockScoped is not defined
// console.log(anotherBlockScoped); // Error: anotherBlockScoped is not defined



/*
Best Practices for Scope
    1. Use let and const instead of var for proper scoping.
    2. Limit global variables to reduce the risk of unintended side effects.
    3. Use block-scoped variables (let/const) for better control over variable accessibility.
*/ 





/*
Nested Scope:
    Nested Scope occurs when one scope is defined inside another scope. In JavaScript, inner scopes (child scopes) can access variables from their outer scopes (parent scopes), but not vice versa. This concept is based on Lexical Scoping.

How Nested Scope Works:
    1. Inner Scope Can Access Outer Scope Variables:
    Variables declared in an outer scope can be accessed and used inside any of its nested (inner) scopes.

    2.Outer Scope Cannot Access Inner Scope Variables:
    Variables declared in an inner scope are not accessible from the outer scope.
*/ 

function outerFunction() {
    let outerVar = "I'm from outer function";
    // Declares a function "outerFunction" and defines a variable "outerVar" within its local scope.

    function innerFunction() {
        let innerVar = "I'm from inner function";
        // Declares a nested function "innerFunction" and defines a variable "innerVar" within its local scope.

        console.log(`Inner: ${outerVar}`);
        // Logs the value of "outerVar", which is accessible because "innerFunction" is nested inside "outerFunction".

        console.log(`Inner: ${innerVar}`);
        // Logs the value of "innerVar", which is defined in the local scope of "innerFunction".
    }

    innerFunction();
    // Calls "innerFunction", executing its body and printing the values of "outerVar" and "innerVar".

    console.log(`Outer: ${outerVar}`);
    // Logs the value of "outerVar" to the console, which is accessible within "outerFunction".

    // Note: "innerVar" cannot be accessed here because it is defined in the inner scope of "innerFunction".
}

// outerFunction()





/*
Scope Chain
    When JavaScript tries to access a variable, it searches for it in the current scope. If not found, it moves up to the outer scope, and so on, until it reaches the global scope. This is called the Scope Chain.
*/ 

let globalVariable = "I'm from global"

function outer() {
    let outerVariable = "I'm from outer"

    function inner() {
        let innerVariable = "I'm from inner"

        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
    }

    inner()

    console.log(globalVariable);
    // console.log(innerVariable);  // Error: innerVariable is not defined
}

// outer()




console.log(addOne(9));
// The "addOne" function is called before its declaration.
// This works because function declarations are **hoisted** to the top of their scope, allowing them to be invoked before they are defined.
// Output: 10

function addOne(num) {
    return num + 1;
    // A named function that takes one argument "num" and returns the value of "num + 1".
}




console.log(addTwo(8));
// The "addTwo" function is called before its declaration.
// This will throw an **error**: `ReferenceError: Cannot access 'addTwo' before initialization`.
// This happens because "addTwo" is defined as a **function expression** using `const`, which is not hoisted like function declarations.
// Variables declared with `const` or `let` are hoisted but remain in a "temporal dead zone" until the line where they are initialized.

const addTwo = function(num) {
    return num + 2;
    // A function expression assigned to the constant "addTwo", which takes one argument "num" and returns the value of "num + 2".
};
