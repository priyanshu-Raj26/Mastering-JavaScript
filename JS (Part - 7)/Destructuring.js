let names = ["tony", "bruce", "peter", "steve", "xyz", "abc", "pyq"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names;  

// Destructuring for objects:-

const student = {
    name: "Priyanshu", 
    age: 20,
    class: 12,
    subjects: ["hindi", "english", "maths", "science"],
    username: "priyanshu@123",
    password: "abcd",
    // city: "pune"
};

let {username: user, password: pass, city: place = "Mumbai"} = student;    //place is default parameter