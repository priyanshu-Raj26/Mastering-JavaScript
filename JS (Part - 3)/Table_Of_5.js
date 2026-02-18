let n = prompt("Write your number");
n = parseInt(n);

console.log("Multiplication Table of " + n );

for (let i = n; i <= n*10; i+=n) {
    console.log(i);
}