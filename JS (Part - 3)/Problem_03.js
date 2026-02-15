// Qs3. Write a JS program to find the sum of digits in a number.

let num = 1234;
let sum = 0;

while(num > 0) {
    sum += (num%10);
    num = Math.floor(num/10);
}

console.log(`Sum of digits: ${sum}`);