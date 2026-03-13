// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

let st = 20;
let end = 26;  //26 excluded;

function generateNum(st,end) {
    let diff = end - st;
    let random = Math.floor(Math.random() * diff) + st;
    return random;
}

console.log(generateNum(st, end));