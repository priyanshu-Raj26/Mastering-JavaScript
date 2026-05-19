function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("sucess: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

// let request = savetoDb("priyanshu");  different syntex
// console.log(request);


// savetoDb("priyanshu")
//     .then(() => {
//         console.log("data1 saved");
//         savetoDb("Ishu")
//         .then(() => {
//             console.log("data2 saved");
//         });
//     })
//     .catch(() => {
//         console.log("pormise was rejected");
//     })


//Improved version:-
savetoDb("priyanshu")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise:", result);
        return savetoDb("Ishu");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise:", result);
        return savetoDb("champion");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise:", result);
    })
    .catch(error => {
        console.log("pormise was rejected");
        console.log("error of promise:", error);
    })