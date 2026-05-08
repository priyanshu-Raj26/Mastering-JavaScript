// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

//changeColor function:-

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`)
            resolve("color changed!");
        }, delay);
    })
}

async function getColor() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("pink", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
}

// resolve() is what tells await "okay, this promise is done, you can move on to the next line."
//  Without it, await just keeps waiting and waiting, with no way to proceed.