let arr = [1, 2, 3, 4, 5];

arr.forEach(function(el) {
    console.log(el);
})

arr.forEach( (el) => {  //Arrow func
    console.log(el);
})

// let print = function (el) {
//     console.log(el);
// }
// arr.forEach(print);


//using array objects:-

let ary = [{
    name: "Priyanshu",
    marks: 95
}, {
    name: "aman",
    marks: 85
}, {
    name: "shradha",
    marks: 92.5
}];

ary.forEach( (student) => {
    console.log(student.marks);
})