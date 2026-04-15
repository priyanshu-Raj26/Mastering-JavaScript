// let smallImg = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImg.length; i++) {
//     smallImg[i].src = "assets/spiderman_img.png";
//     console.log(`value of img no: ${i} is changed`);
//     console.dir(smallImg[i]);
// }

//By tag name:-

console.log(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("p"));

console.log(document.getElementsByTagName("p")[0].innerText);

console.log(document.getElementsByTagName("span")); //print empty collection(not found)

//query Selector:- 

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a")); // selets All div element's anchor tag.

//Setting contect in object:-

let heading = document.querySelector('h1');

heading.innerHTML = `<u>${heading.innerText}</u>`; // we can change html using this.

//Manipulating Attributes:-

let img = document.querySelector('img');

console.log(img.getAttribute('id'));

// console.log(img.setAttribute('id', 'spiderman'));  //by changing it's id name, asinged style will remove. should use carefully

// img.setAttribute('src', 'assets/creation_3.jpeg');

img.setAttribute('class', 'images');  //we can set class name if not exists.    

//Style Attribute:- 

// heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll(".box a");

for (const link of links) {
    link.style.color = "orange";
}

// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "red";
// }

// classList Property:-

console.log(heading.classList);

heading.classList.add('green');
heading.classList.add('underline');
heading.classList.remove('green');

// heading.setAttribute('class', 'green');  it set only one class green and remove all classes

console.log(heading.classList.contains("underline"));

console.log(heading.classList.toggle("underline"));  //add if not exist or remove if exist
console.log(heading.classList.toggle("green"));

let box = document.querySelector(".box");

box.classList.add("yellowBg");

//Navigation on page:-

let h4 = document.querySelector("h4");

console.log(h4.parentElement);
console.log(h4.children);

console.log(box.childElementCount); //print no of child

let ul = document.querySelector('ul');

console.log(ul.children[0]);

console.log(ul.children[1].nextElementSibling);
console.log(ul.children[2].previousElementSibling);

let p = document.querySelector('p');

p.previousElementSibling.style.color = "red";

//Adding Elements:-

let newP = document.createElement('p');

newP.innerText = "Hi i am a new p";

console.log(newP);

let body = document.querySelector('body');

// body.appendChild(newP);

box.appendChild(newP);

let btn = document.createElement("button");

btn.innerText = "click me!";
box.appendChild(btn)

newP.append(" this is new text");

newP.append(btn);
newP.append(" do not cilck this button");

box.prepend(newP);  // add in start

let newBtn = document.createElement("button");

newBtn.innerHTML = "NEW BUTTON";
// p.insertAdjacentElement("beforebegin" ,newBtn);
// p.insertAdjacentElement("afterbegin" ,newBtn);
// p.insertAdjacentElement("beforeend" ,newBtn);
p.insertAdjacentElement("afterend" ,newBtn);

//reomve elements:-

// body.removeChild(newBtn);
// btn.remove();
// box.remove();
// body.remove();


// //Practice question:-
let P = document.createElement('p');

P.innerText = "Hey i'm red";
P.style.color = 'red';
// body.appendChild(P);
document.querySelector('body').appendChild(P);


let h3 = document.createElement('h3');

h3.innerText = "I'm a blue h3!";
document.querySelector('body').appendChild(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');

h1.innerText = "I'm in a div";
para.innerText = "ME TOO!";


// div.insertAdjacentElement("afterbegin", h1);
// div.insertAdjacentElement("beforeend", para);
div.append(h1);
div.append(para);
div.classList.add('div');


document.querySelector('body').append(div);


let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append (button)

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn2 = document.querySelector("#btn");
btn2.classList.add("btnStyle");

let head1 = document.createElement('h1');

head1.style.color = 'purple';
head1.innerHTML = "<u>DOM Practice</u>";
document.querySelector('body').append(head1);

let para3 = document.createElement('p');

para3.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(para3);
body.append(para3);