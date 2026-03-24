// Global variable
var length = 4;

// Global function
function callback() {
    console.log(this.length);
}

// Object with its own length property
const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

// When we call this:
object.method(callback, 1, 2);

// Step-by-step execution:
// 1. object.method() is called with 3 arguments: callback, 1, 2
// 2. Inside method(), callback() is called
// 3. callback is called as a standalone function (not as object.callback())
// 4. When callback() executes, 'this' refers to the global object
// 5. In the global scope, length = 4
// 6. So this.length = 4

// Output: guess it ;)