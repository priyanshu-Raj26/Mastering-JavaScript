let arr = [1, 2, 3, 4];

let double = arr.map((el) => {
   return el * el; //square of each elements.
});

console.log(double);

let students = [{
    name: "Priyanshu",
    marks: 95
}, {
    name: "aman",
    marks: 85
}, {
    name: "shradha",
    marks: 94.4
}];

let gpa = students.map((el) => {
    return el.marks / 10;
})