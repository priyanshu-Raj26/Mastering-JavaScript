let sum = 50;  //Golbal scope

function calcSum(a,b) {
    let sum = (a+b);  //Function scope
    console.log(sum);
}

calcSum(5, 5);

{
    let a = 25; //block scope
}

console.log(a); // Error

for (let i = 0; i < 5; i++) {
    console.log(i);    //block scope
}

console.log(i); // Error         


let age = 18;
if (age >= 18) {
    let str = "adult";
}

console.log(str);    // Error




// 3. Lexical Scope (scope chain)
let level1 = "first";

function first() {
  let level2 = "second";
  console.log(level1);
  function second() {
    let level3 = "third";
    console.log(level1, level2, level3); // Can access all parent scopes
  }
  second();
}

first();