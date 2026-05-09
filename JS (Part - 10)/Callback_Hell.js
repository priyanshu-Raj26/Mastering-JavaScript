let h1 = document.querySelector("h1");
//Callback nesting -> Callback Hell

// function chnageColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// chnageColor("red", 1000, () => {
//     chnageColor("green", 1000, () => {
//         chnageColor("Pink", 1000, () => {
//             chnageColor("blue", 1000, () => {
//                 chnageColor("yellow", 1000);
//             });
//         });
//     });
// });


function chnageColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    })
}

chnageColor("red", 1000)
    .then((result) => {
        console.log("red color was completed");
        return chnageColor("green", 1000);
    })
    .then((result) => {
        console.log("green color was completed");
        return chnageColor("pink", 1000);
    })
    .then((result) => {
        console.log("pink color was completed");
        return chnageColor("blue", 1000);
    })
    .then((result) => {
        console.log("blue color was completed");
        return chnageColor("yellow", 1000);
    })
    .then((result) => {
        console.log("yellow color was completed");
    })