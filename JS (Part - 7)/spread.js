let arr = [1, 8, 7, 5, 9, 6, 3, 4, 2, 21, 45, 78];

console.log(Math.min(...arr));
console.log(Math.max(...arr));


console.log(arr);
console.log(...arr);

//for string:-
console.log(..."priyanshu Raj");


let nums = [1, 2, 3, 4, 5];
let newNums = nums;


let char = [..."hello"];


let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7];

let all = [...even, ...odd];  //order maters

//with object literals:-
const data = {
    email: "iromman@gmail.com",
    password: "snap"
};

const dataCopy = {...data, id: 123, country: "India"};

let ary = [1, 2, 3, 4, 5]; //value only 
let obj = {...ary};  //index become key