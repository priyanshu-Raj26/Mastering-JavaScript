const student = {
    name: "Priyanshu Raj",
    marks: 95,
    prop: this,  // golbal scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks;   //parent's scope -> window
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);   // student obj
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function() {
            console.log(this);   //window obj
        }, 2000);
    }
}