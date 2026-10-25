// TOPIC: SCOPE AND HOISTING
function demo() {
  var functionScoped = "visible in function";
  if (true) {
    let blockScoped = "inside block";
    console.log(blockScoped); // inside block
  }
  console.log(functionScoped);
  // console.log(blockScoped); // ReferenceError: not defined
}
demo();

// Function declarations can be called before their declaration.
sayHi(); // Hi!
function sayHi() {
  console.log("Hi!");
}

// let/const exist in a temporal dead zone before declaration.
// console.log(value); // ReferenceError
const value = 10;
