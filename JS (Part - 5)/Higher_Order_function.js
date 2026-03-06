let multipleGreet = function(func, count) {   //Higher order function
    for (let i = 0; i < count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

// multipleGreet(greet, 3);

multipleGreet(function() {console.log("nameste")}, 3);