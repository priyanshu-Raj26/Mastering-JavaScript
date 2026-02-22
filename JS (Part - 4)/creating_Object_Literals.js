// let student = {
//     name: "priyanshu",
//     age: 20,
//     marks: 85
// };

// const item = {
//     price: 100.99, 
//     discount: 20, 
//     colors: ["red", "blue"]
// };

const post = {
    username: "@PriyanshuRaj26",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};

console.log(post["likes"]);
console.log(post["content"]);

console.log(post.username);
console.log(post.tags[1]);

let prop = "reposts";

console.log(post[prop]);