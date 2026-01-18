let num1 = 230;
let num2 = 7303;

if (num1 % 10 === num2 % 10) {
    console.log(`${num1} and ${num2} have the same last digit ie. ${num1 % 10}`);
} else {
    console.log(`${num1} and ${num2} have Not the same last digit`);
}