// Qs3. Write a JavaScript program to check whether a string is blank or not

let str = "          ";

let ans = str.trim();

if (ans.length != 0) {
    console.log("string is not blank");
} else {
    console.log("string is blank");
}