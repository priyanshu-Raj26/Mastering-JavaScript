function print(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us:", args[i]);
    }
}

function name() {
    console.log(arguments);  //inbuild "arguments"
    console.log(arguments.length);
    arguments.push(1);  //gives error
}

function sum(...args) {
    return args.reduce((sum, el) => sum+el);
}


function sum2() {
    return arguments.reduce((sum, el) => sum+el);  //gives error (not array)
}

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {  // Math.min()
        if (min > el) {
            return el;
        } else {
            return min;
        }
    })
}

console.log(min("hello", 1, 2, 5,4,8));