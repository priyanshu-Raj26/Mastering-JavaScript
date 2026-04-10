// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//  The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs =  (arr, ...args) => [
    ...arr,
    ...args.map( (d) => d * 2),
]

console.log(doubleAndReturnArgs([1, 2, 3], 2, 4, 6));


