let btn = document.querySelector("button");


// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("button was double clicked");
// })

let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    console.log("Key = ", event.key);
    console.log("code = ", event.code);
    console.log("key was pressed!");
});


input.addEventListener("keyup", function () {
    console.log("key was pressed!");
});


// input.addEventListener("keydown", function (event) {
//     console.log("code = ", event.code);
     
//     if (event.code == "KeyU") {
//         console.log("character moves up");
//     } else if (event.code == "KeyD") {
//         console.log("character moves Down");
//     } else if (event.code == "KeyL") {
//         console.log("character moves Left");
//     } else if (event.code == "KeyR") {
//         console.log("character moves Right");
//     }
// });


//form event:-

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted");
});