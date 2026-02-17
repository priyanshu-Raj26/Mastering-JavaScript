// Qs5. Find the largest number in an array with only positive numbers.

let arr = [8, 12, 45, 23, 32, 100];
let max = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(`Largest number in an array is: ${max}`);