const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt(" guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("You won! congrats!! random number was ", random);
        break;
    } else if (guess > random) {
        guess = prompt("hint: Your guess was large. Please try again");
    } else if (guess < random) {
        guess = prompt("hint: Your guess was small. Please try again");
    }
}