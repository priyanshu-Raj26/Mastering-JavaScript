// Scope pollution and IIFE (Immediately Invoked Function Expression)
(function () {
    var privateVar = "Can't touch this";
    // Your code here won't pollute global scope
})();

// Module pattern using scope
const Calculator = (function () {
    // Private variables
    let result = 0;

    // Private function
    function log(operation) {
        console.log(`${operation}: ${result}`);
    }

    // Public API
    return {
        add(n) {
            result += n;
            log('Add');
            return this;
        },
        subtract(n) {
            result -= n;
            log('Subtract');
            return this;
        },
        getResult() {
            console.log(result);
            return result;
        }
    };
})();

Calculator.add(5).subtract(2).getResult(); // 3