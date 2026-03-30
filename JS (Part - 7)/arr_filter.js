let arr = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let ans = arr.filter((el) => {
    return el % 2 == 0;  //add in ans arr only in true case.
})

console.log(ans);