// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr = ["hello", -9, 'a', 2, 12, 0, 7];
let item = 2;

// console.log(arr.includes(item));
if (arr.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exists in array");
}
