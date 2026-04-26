let btn = document.createElement("button");
let body = document.querySelector("body");

btn.innerText = "  Click me!  ";
body.append(btn);

btn.addEventListener("click", function () {

    btn.style.backgroundColor = "green";
})