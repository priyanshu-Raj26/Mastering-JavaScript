const sum = (a, b) => a+b;  //no need of return keyword.

const cube = n => {   //we can remove () for single argument.
      return n * n * n;
};

const pow = (x, y) => {
    return x ** y;
};

const hello = () => {
    console.log("hello world!");
}

//Implicit function
const mul = (a,b) => a*b;