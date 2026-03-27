let student = {
    name: "Priyanshu",
    age: 20, 
    eng: 95,
    math: 93,
    phy: 90,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
};

student.getAvg();

function example() {
    console.log(this);  //prints window object
}

example();

console.log(this);