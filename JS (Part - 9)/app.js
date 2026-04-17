// let btn = document.querySelector("button");
// console.dir(btn);


// btn.onclick = function() {
//     console.log("button was clicked")
//     alert("button was clicked")
// }

let btns = document.querySelectorAll("button");

for (const btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("You hovered a button");
    };
}

function sayHello() {
    alert("Hello!");    
}
