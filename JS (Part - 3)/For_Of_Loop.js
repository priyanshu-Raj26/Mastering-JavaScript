let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (fruit of fruits) {
    console.log(fruit);
}

for (char of "apnacollege") {
    console.log(char);
}

// Nested for-of loop:

let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder women", "batman"] ] ;

for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}