function print() {
    console.log("Hello");
}

// print();

function print1t05() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// print1t05();

function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("not Adult");
    }
}

// isAdult();

function poem() {
    console.log("Twinkel Twinkel littel star");
    console.log("how I wonder what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky");
}

poem();

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

rollDice();
rollDice();
rollDice();
rollDice();