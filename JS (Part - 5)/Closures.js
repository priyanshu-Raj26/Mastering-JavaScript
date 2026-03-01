// function outerFunction() {
//   let outerVar = "I'm outside!";
  
//   function innerFunction() {
//     console.log(outerVar); // Can access outerVar
//   }
  
//   return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure(); // "I'm outside!" - still has access!

//Intermediate Level:-

// Practical use: Private variables
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(counter.count); // undefined - it's private!

// Common closure pitfall with var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3 (all reference same i)
  }, 100);
}

// Fix with let (block scope)
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j); // 0, 1, 2 (each has own j)
  }, 100);
}

// Fix with closure
for (var k = 0; k < 3; k++) {
  (function(captured) {
    setTimeout(function() {
      console.log(captured); // 0, 1, 2
    }, 100);
  })(k);
}