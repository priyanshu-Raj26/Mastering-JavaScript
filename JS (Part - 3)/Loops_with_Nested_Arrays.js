let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder women", "batman"] ] ;

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i+1}`);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}

let students = [ ["aman", 94], ["shradha", 95.5], ["priyanshu", 90] ];

for (let i = 0; i < students.length; i++) {
    console.log(`info of student #${i+1}`);
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}