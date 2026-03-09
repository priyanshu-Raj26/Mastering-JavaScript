// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";
let ans = "";

function getUnique(str,ans) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (ans.indexOf(char) == -1) {
            ans += char;
        }
    }
    return ans;
}


console.log(getUnique(str,ans));