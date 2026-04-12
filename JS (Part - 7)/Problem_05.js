// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

let obj1 = {
    name: "priyanshu", 
    age: 20
};

let obj2 = {
    city: "Patna",
    country: "India"
};

console.log(mergeObjects(obj2, obj1));
