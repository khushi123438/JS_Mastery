// TOPIC: THIS AND EXECUTION CONTEXT
// ==========================================


// 1. this IN AN OBJECT METHOD

const person = {
  name: "Asha",

  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

person.greet();
// Output: Hello, Asha

// Here, this refers to the object calling the method.


// 2. this IN A REGULAR FUNCTION

function introduce(city) {
  console.log(`${this.name} lives in ${city}`);
}

introduce.call({ name: "Ravi" }, "Kanpur");
// Output: Ravi lives in Kanpur

introduce.apply({ name: "Mina" }, ["Delhi"]);
// Output: Mina lives in Delhi

const bound = introduce.bind({ name: "Zoya" });
bound("Lucknow");
// Output: Zoya lives in Lucknow

// call() passes arguments individually.
// apply() passes arguments as an array.
// bind() returns a new function with this fixed.


// 3. ARROW FUNCTIONS AND this

const student = {
  name: "Riya",

  greet() {
    const sayHi = () => {
      console.log(`Hi, ${this.name}`);
    };

    sayHi();
  }
};

student.greet();
// Output: Hi, Riya

// Arrow functions don't have their own this.
// They use this from their surrounding scope.


// 4. WHY ARROW FUNCTIONS CAN BE TRICKY IN OBJECTS

const user = {
  name: "Aman",

  greet: () => {
    console.log(this.name);
  }
};

user.greet();
// Usually undefined in a Node.js CommonJS file.
// An arrow function doesn't get this from user.


// 5. this IN A CLASS

class Employee {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`I am ${this.name}`);
  }
}

const employee = new Employee("Neha");
employee.introduce();
// Output: I am Neha

// new creates an object, and this refers to that instance.


// 6. LOSING this WHEN PASSING A METHOD

const coach = {
  name: "Priya",

  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

coach.greet();
// Output: Hello, Priya

const greetCoach = coach.greet;
greetCoach();
// In a Node.js CommonJS file, this.name is usually undefined.
// The method was called without coach as its receiver.

const safeGreet = coach.greet.bind(coach);
safeGreet();
// Output: Hello, Priya


// 7. EXECUTION CONTEXT

const globalMessage = "Learning JavaScript";

function showMessage() {
  const localMessage = "Inside function";
  console.log(globalMessage);
  console.log(localMessage);
}

showMessage();

// Output:
// Learning JavaScript
// Inside function

// When a function runs, JavaScript creates an execution
// context for its local variables and execution state.


// 8. EXECUTION CONTEXT AND FUNCTION CALLS

function first() {
  console.log("First function started");
  second();
  console.log("First function ended");
}

function second() {
  console.log("Second function running");
}

first();

// Output:
// First function started
// Second function running
// First function ended

// second() runs before first() can continue.
// Function calls are managed using the call stack.


// 9. EXECUTION CONTEXT WITH RETURN VALUES

function multiply(a, b) {
  const result = a * b;
  return result;
}

const answer = multiply(4, 5);
console.log(answer);
// Output: 20

// The function gets its own parameters and local variables.
// After return, its execution finishes and the result is used.


// 10. this WITH call(), apply() AND bind()

const account = {
  name: "Khushi"
};

function showUser(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

showUser.call(account, "Kanpur", "India");
// Output: Khushi lives in Kanpur, India

showUser.apply(account, ["Delhi", "India"]);
// Output: Khushi lives in Delhi, India

const showAccount = showUser.bind(account, "Mumbai");
showAccount("India");
// Output: Khushi lives in Mumbai, India

