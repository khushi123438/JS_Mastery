

// 1. BASIC CLOSURE

function outer() {
  const message = "Hello from outer function";

  function inner() {
    console.log(message);
  }

  return inner;
}

const myFunction = outer();
myFunction();

// Output: Hello from outer function

// inner() remembers the variable from outer(),
// even after outer() has finished executing.


// 2. COUNTER USING CLOSURE

function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// count is private and can be accessed through
// the returned increment function.


// 3. MULTIPLE INDEPENDENT COUNTERS

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3

// Each createCounter() call creates its own count.


// 4. CLOSURE WITH PARAMETERS

function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(7)); // 14
console.log(triple(7)); // 21

// Each returned function remembers its factor.


// 5. CLOSURE USING ARROW FUNCTION

function makeGreeting(name) {
  return () => {
    console.log(`Hello, ${name}!`);
  };
}

const greetAsha = makeGreeting("Asha");
const greetRiya = makeGreeting("Riya");

greetAsha(); // Hello, Asha!
greetRiya(); // Hello, Riya!


// 6. PRIVATE DATA

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
      }
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0 || amount > balance) {
        return "Invalid amount or insufficient balance";
      }

      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);

console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300

// balance cannot be accessed directly:
// console.log(account.balance); // undefined
// It can be changed only through the provided methods.


// 7. CLOSURE WITH A FUNCTION FACTORY

function makePower(power) {
  return number => number ** power;
}

const square = makePower(2);
const cube = makePower(3);

console.log(square(4)); // 16
console.log(cube(4));   // 64


// 8. CLOSURE AND LOOP

const functions = [];

for (let i = 1; i <= 3; i++) {
  functions.push(() => console.log(i));
}

functions[0](); // 1
functions[1](); // 2
functions[2](); // 3

// let creates a separate binding for each iteration.


// 9. CLOSURE WITH var

const oldFunctions = [];

for (var i = 1; i <= 3; i++) {
  oldFunctions.push(() => console.log(i));
}

oldFunctions[0](); // 4
oldFunctions[1](); // 4
oldFunctions[2](); // 4

// var shares one function-scoped variable.
// By the time callbacks run, i is 4.


// 10. PRACTICAL EXAMPLE: DISCOUNT CALCULATOR

function createDiscountCalculator(discountPercent) {
  return function (price) {
    return price - (price * discountPercent) / 100;
  };
}

const tenPercentOff = createDiscountCalculator(10);
const twentyPercentOff = createDiscountCalculator(20);

console.log(tenPercentOff(1000));    // 900
console.log(twentyPercentOff(1000)); // 800


// 11. CLOSURE WITH A PRIVATE SETTINGS VALUE

function createTheme(initialTheme) {
  let theme = initialTheme;

  return {
    getTheme() {
      return theme;
    },

    setTheme(newTheme) {
      if (newTheme === "light" || newTheme === "dark") {
        theme = newTheme;
      }
      return theme;
    }
  };
}

const settings = createTheme("light");

console.log(settings.getTheme());      // light
console.log(settings.setTheme("dark")); // dark
console.log(settings.getTheme());      // dark


