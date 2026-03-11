let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);   //Function scope

    function innerGreet() {
        console.log(greet);   //Lexical scope
    }
    // innerGreet();
}

console.log(greet);
changeGreet();