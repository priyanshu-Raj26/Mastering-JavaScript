// // What you write:
// console.log(x); // undefined (not an error!)
// var x = 5;

// // How JavaScript interprets it:
// var x;
// console.log(x);
// x = 5;

// // Functions are hoisted differently
// sayHello(); // Works!

// function sayHello() {
//   console.log("Hello!");
// }

// // But function expressions are not fully hoisted
// // sayHi(); // Error: sayHi is not a function
// var sayHi = function() {
//     console.log("Hi!");
// };
// sayHi();

// Intermediate Level:-

// let and const are hoisted but in "Temporal Dead Zone"
// console.log(y); // ReferenceError: Cannot access before initialization
let y = 10;

// Function hoisting vs variable hoisting
console.log(typeof myFunc); // "function"
console.log(typeof myVar);  // "undefined"

function myFunc() {}
var myVar = 5;

// Hoisting in different scopes
let scope = "global";

function checkScope() {
    console.log(scope); // undefined (not "global")
    var scope = "local";
    console.log(scope); // "local"
}

checkScope();

// This is because of hoisting:
function checkScope2() {
  var scope = 1; // Hoisted
  console.log(scope); // 1
  scope = "local";
  console.log(scope); // "local"
}

checkScope2();