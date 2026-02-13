// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array, result should be an array.

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}

console.log("final array",arr);