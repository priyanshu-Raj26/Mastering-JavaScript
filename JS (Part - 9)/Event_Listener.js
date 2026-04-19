let btns = document.querySelectorAll("button");


for (const btn of btns) {
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log("You double clicked me!");
    });
}

function sayHello() {
    // console.log("Hello!");
    alert("Hello!")
}

function sayName() {
    // console.log("Apna college!");
    alert("Apna college");
}

//

let p = document.querySelector('p');

p.addEventListener("click", function () {
    console.log("para was clicked!");
} )

let div = document.querySelector("div");

div.addEventListener("mouseenter", function () {
    console.log("mouse inside box");
})

//
let btn1 = document.querySelector(".btn");
let para = document.querySelector(".para");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn1.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
