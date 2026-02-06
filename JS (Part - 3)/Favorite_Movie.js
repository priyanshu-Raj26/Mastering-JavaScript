const favMovie = "avatar";

let guess = prompt("Guess my Favorite Movie");

while ((guess != favMovie)) {
    if (guess == "quit") {
        console.log("You quit.");
        break;
    }
    guess = prompt("Wrong guess!, please Try Again");
}

if (guess == favMovie) {
    console.log("congrats!!");
}