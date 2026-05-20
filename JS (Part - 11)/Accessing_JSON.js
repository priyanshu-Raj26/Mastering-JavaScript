let jsonRes =
  '{"fact":"A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime.","length":114}';

// console.log(jsonRes)

// json data to js object
let validRes = JSON.parse(jsonRes);
console.log(validRes);

// js object to json data
let student = {
  name: "Priyanshu",
  marks: 95,
};

let validStu = JSON.stringify(student);
console.log(validStu);
