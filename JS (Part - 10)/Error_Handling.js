try {
    let obj = null;
    console.log(obj.name);          // this throws an error
} catch (error) {
    console.log("An error occurred:", error.message);  // catches it
} finally {
    console.log("Code continues!");  // always runs
}

// Output:
// An error occurred: Cannot read properties of null (reading 'name')
// Code continues!


try {
    undefinedFunction();
} catch (error) {
    console.log(error.name);     // "ReferenceError"
    console.log(error.message);  // "undefinedFunction is not defined"
    console.log(error.stack);    // full stack trace — shows where the error happened
}



//can create and throw my own errors using the throw keyword:

function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older!");
    }
    console.log("Access granted");
}

try {
    checkAge(15);
} catch (error) {
    console.log(error.message);
}