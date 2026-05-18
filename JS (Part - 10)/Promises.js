// CAllback Hell:-

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("priyanshu", () => {
//     console.log("success1: your data was saved");
//     savetoDb("Ishu", () => {
//         console.log("succes:2 your data2 saved");
//         savetoDb("champion", () => {
//             console.log("success3: your data3 saved");
//         }, () => {
//             console.log("fauilure3: weak connectoin");
//         })
//     }, () => {
//         console.log("failure2: weak connection.");
//     })
// }, () => {
//     console.log("failure1: weak connection, data not saved");
// });

//Promises:-

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

savetoDb("priyanshu")
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("pormise was rejected");
  });
