// let a = null
// console.log(typeof a) // Prints "object"....weird

// // Q. What is datatype COERSION? 

// // Built-in type Methods

// let b = 'hello world'
// console.log(b.toUpperCase()); // ==> 'HELLO WORLD'

// // Q. We get built in methods from Object Wrappers (wrapper objects?). 
// // Q. Why is there 'string' verses 'String'?

// // Variable hoisting: 

// let c = 2

// foo()

// function foo() {
//     c = 3

//     console.log(c)

//     var c 
// }

// console.log(c);

// Q. Can foo() run on line 18 even though it's declared on line 20 because of 'hoisting'?

// Scope: Variables can only be accesses inside of the scope in which they are declared. 

// function foo() {
//     a = 3
// }

// foo();
// console.log(a) // only works because 'a' automatically becomes a global variable
// // ALWAYS FORMALLY DECLARE YOUR VARIABLES. 
