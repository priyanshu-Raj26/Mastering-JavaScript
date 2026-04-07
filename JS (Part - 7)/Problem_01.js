// Qs1. Square and sum the array elements using the arrow function and then find the average of the array

let arr = [2, 5, 4, 8, 9, 7, 6, 1];

let ans = arr.reduce( (res,el) => {
    return res += el * el;
})

console.log(ans/arr.length);