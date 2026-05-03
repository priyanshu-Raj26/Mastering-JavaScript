async function greet() {
  // throw "404 page not found";
  return "hello!";
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("restult was: ", result);
  })
  .catch((err) => {
    console.log("promise was rejected with err: ", err);
  });

//Arrow func:-
let demo = async () => {
  return 5;
};

demo();
