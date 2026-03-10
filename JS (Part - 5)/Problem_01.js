let arr = ["hi", "hello", "bye", "good"];

function concat(arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += arr[i];
    }
    
    return string;
}

console.log(concat(arr));