const classInfo = {
    priyanshu: {
        grade: "A+",
        city: "patna"
    },
    aman: {
        grade: "A",
        city: "delhi"
    },
    shradha: {
        grade: "O",
        city: "gurgaon"
    },
}

console.log(classInfo.aman);

console.log(classInfo.shradha);

console.log(classInfo.shradha.city);

classInfo.shradha.city = "mumbai";

console.log(classInfo.shradha.city);

console.log(classInfo.shradha);