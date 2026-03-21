// write an Arrow function named arrayAverage that accepts an array of number and reutrns the average of those numbers.

let arr = [2, 4, 6, 8, 10];

const arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
};

console.log(arrayAverage(arr));