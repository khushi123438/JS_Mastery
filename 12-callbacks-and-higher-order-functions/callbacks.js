// 1. BASIC CALLBACK

function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

greet("Asha", sayHello);

// Output: Hello, Asha!


// 2. CALLBACK WITH A RETURN VALUE

function processNumber(number, callback) {
  return callback(number);
}

const result = processNumber(5, n => n * n);

console.log(result); // 25


// 3. ANONYMOUS CALLBACK

greet("Riya", function (name) {
  console.log(`Welcome, ${name}!`);
});

// Output: Welcome, Riya!


// 4. ARROW FUNCTION CALLBACK

greet("Aman", name => {
  console.log(`Hi, ${name}!`);
});

// Output: Hi, Aman!


// 5. CUSTOMIZING BEHAVIOR WITH CALLBACKS

function formatGreeting(name, formatter) {
  console.log(formatter(name));
}

formatGreeting("Asha", name => `Hello, ${name}!`);
// Output: Hello, Asha!

formatGreeting("Riya", name => `Good morning, ${name}!`);
// Output: Good morning, Riya!


// 6. CALLBACK WITH MULTIPLE ARGUMENTS

function calculate(a, b, callback) {
  return callback(a, b);
}

console.log(calculate(10, 5, (a, b) => a + b)); // 15
console.log(calculate(10, 5, (a, b) => a - b)); // 5
console.log(calculate(10, 5, (a, b) => a * b)); // 50


// 7. ARRAY map() CALLBACK
// Transforms each array element

const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]


// 8. filter() CALLBACK
// Keeps elements that satisfy the condition

const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]


// 9. forEach() CALLBACK
// Performs an action for each element

const fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// Output:
// 0 Apple
// 1 Mango
// 2 Banana


// 10. find() CALLBACK
// Returns the first matching element

const scores = [35, 60, 80, 90];

const firstPassingScore = scores.find(score => score >= 70);

console.log(firstPassingScore); // 80


// 11. reduce() CALLBACK
// Combines array elements into one result

const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total); // 600


// 12. SYNCHRONOUS CALLBACK
// The callback runs immediately

function doTask(callback) {
  console.log("Task started");
  callback();
  console.log("Task completed");
}

doTask(() => {
  console.log("Working...");
});

// Output:
// Task started
// Working...
// Task completed


// 13. ASYNCHRONOUS CALLBACK WITH setTimeout()
// The callback runs after a delay

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");

// Output:
// First
// Third
// Second (after approximately 1 second)


// 14. CALLBACK WITH ERROR-FIRST CONVENTION
// A common pattern in Node.js APIs

function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"), null);
    return;
  }

  callback(null, a / b);
}

divide(10, 2, (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
});

// Output: 5

divide(10, 0, (error, result) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(result);
  }
});

// Output: Cannot divide by zero


// 15. CALLBACK HELL
// Nested callbacks can become difficult to read

function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Asha" });
  }, 300);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback(["Order 101", "Order 102"]);
  }, 300);
}

getUser(user => {
  console.log("User:", user.name);

  getOrders(user.id, orders => {
    console.log("Orders:", orders);
  });
});

// Output after delays:
// User: Asha
// Orders: [ 'Order 101', 'Order 102' ]


// 16. A CLEANER ALTERNATIVE: PROMISES
// Useful for managing asynchronous operations

function getMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received");
    }, 500);
  });
}

getMessage().then(message => {
  console.log(message);
});

// Output after approximately 500 ms:
// Data received


// 17. PRACTICAL EXAMPLE: CUSTOM CALCULATOR

function calculator(a, b, operation) {
  return operation(a, b);
}

const addition = calculator(8, 4, (a, b) => a + b);
const multiplication = calculator(8, 4, (a, b) => a * b);

console.log(addition);       // 12
console.log(multiplication); // 32


// END OF CALLBACKS
