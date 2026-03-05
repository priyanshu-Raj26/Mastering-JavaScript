function oddOrEven_Factory(request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("Wrong request")
    }
}

let request = "even"; 

let func = oddOrEven_Factory(request);
  
console.log(func(2));
console.log(func(3));