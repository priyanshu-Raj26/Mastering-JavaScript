function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Priyanshu", 20);

printInfo("Divyanshu", 16);

printInfo("sharadha");  //prints name only

function calcAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}

calcAvg(5, 10, 15);

function printTable(n) {
    for (let i = n; i <= n*10; i+=n) {
        console.log(i);
    }
}

printTable(2);