// Synchronous:-
console.log("Synchronous behaviour:-");

console.log("Start");
console.log("Middle");
console.log("End");


// Asynchronous:-
console.log("Asynchronous behaviour:-");

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
