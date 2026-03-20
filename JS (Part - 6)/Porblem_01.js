// write an Arrow function that prints "Hello world" 5 times at interval of 2s each.

let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Executed 5 times.");
}, 10000);