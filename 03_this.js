/*
this:
    The keyword this refers to the object that is executing the current function. Its value depends on how and where the function is called. It can vary in different contexts such as global scope, object methods, constructors, and arrow functions.

Global Context
In the global execution context (outside any function):
    In a browser, this refers to the global object (window).
    In Node.js, it refers to an empty object ({}).
*/

// console.log(this); // In browsers, outputs: Window object



// 2. Inside an Object Method
// When a function is called as a method of an object, this refers to the object that owns the method.

const user = {
    name: "Ihsan",
    greet: function() {
        console.log(this.name); // "this" refers to the user object
    },
};

// user.greet(); // Output: Ihsan



// 3. Inside a Regular Function
    // When a function is called normally (not as a method of an object), this refers to the global object in non-strict mode, or undefined in strict mode.

function showThis() {
    let user = "Ihsan"
    console.log(this.name);
}

// showThis(); 
// In browsers: Window object (non-strict mode)
// In strict mode: undefined




// 4. Inside a Constructor Function
    // When a function is used as a constructor (called with new), this refers to the newly created object.

function Person(name) {
    this.name = name
}

const person = new Person("Ihsan")
// console.log(person.name)



// 5. Arrow Functions
    // Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope (lexical scoping).

const obj = {
    name: "Ihsan",
    arrowFunc: () => {
        console.log(this.name); // "this" refers to the outer/global scope, not obj
    },
    regularFunc: function() {
        console.log(this.name); // "this" refers to obj
    },
}

obj.arrowFunc();   // Output: undefined (or global name in some contexts)
obj.regularFunc(); // Output: Ihsan
