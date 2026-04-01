let nums = [1, 2, 3, 4, 5];

let finalVal = nums.reduce((res,el) => {
    console.log(res)
    return res+el;
});
console.log(finalVal);


//find max in array:-
let arr = [1, 8, 5, 9, 7, 4, 3, 6,2];

let max = arr.reduce((max,el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
})

console.log(max);