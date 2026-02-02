// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(arr.length-n);

console.log(ans);
