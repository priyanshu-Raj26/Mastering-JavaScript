function sum(a, b) {
    return (a+b);
}

console.log(sum(sum(1,2),3));

function isAdult(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(isAdult(18));

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(5));