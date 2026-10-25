
// ==========================================
// TOPIC: OBJECTS IN JAVASCRIPT
// ==========================================


// ==========================================
// 1. CREATING AN OBJECT
// ==========================================

const user = {
  name: "Asha",
  age: 21,
  city: "Kanpur"
};

console.log(user);

// Output:
// { name: 'Asha', age: 21, city: 'Kanpur' }


// ==========================================
// 2. ACCESSING OBJECT PROPERTIES
// ==========================================

// Dot notation
console.log(user.name); // Asha
console.log(user.age);  // 21

// Bracket notation
console.log(user["name"]); // Asha
console.log(user["city"]); // Kanpur

// Bracket notation is useful for dynamic keys
const property = "age";
console.log(user[property]); // 21


// ==========================================
// 3. ADDING PROPERTIES
// ==========================================

user.country = "India";
user["email"] = "asha@example.com";

console.log(user.country); // India
console.log(user.email);   // asha@example.com


// ==========================================
// 4. UPDATING PROPERTIES
// ==========================================

user.age = 22;

console.log(user.age); // 22


// ==========================================
// 5. DELETING PROPERTIES
// ==========================================

delete user.email;

console.log(user.email); // undefined


// ==========================================
// 6. OBJECT METHODS
// A function stored inside an object
// ==========================================

const person = {
  name: "Asha",

  greet() {
    return `Hi, I am ${this.name}`;
  },

  introduce() {
    return `My name is ${this.name}`;
  }
};

console.log(person.greet());
// Output: Hi, I am Asha

console.log(person.introduce());
// Output: My name is Asha


// ==========================================
// 7. UNDERSTANDING "this"
// In a regular object method, this refers
// to the object used to call the method.
// ==========================================

const employee = {
  name: "Rahul",
  salary: 50000,

  showDetails() {
    console.log(this.name, this.salary);
  }
};

employee.showDetails();

// Output: Rahul 50000


// ==========================================
// 8. OBJECT DESTRUCTURING
// Extract properties into variables
// ==========================================

const student = {
  name: "Khushi",
  age: 20,
  course: "CSE"
};

const { name, age, course } = student;

console.log(name);   // Khushi
console.log(age);    // 20
console.log(course); // CSE


// ==========================================
// 9. DESTRUCTURING WITH RENAMING
// ==========================================

const { name: studentName } = student;

console.log(studentName); // Khushi

// studentName is a new variable.
// The original property is still named "name".


// ==========================================
// 10. DESTRUCTURING WITH DEFAULT VALUES
// ==========================================

const account = {
  username: "asha123"
};

const {
  username,
  country = "India"
} = account;

console.log(username); // asha123
console.log(country);  // India

// Default is used when the property is undefined.


// ==========================================
// 11. NESTED OBJECTS
// An object inside another object
// ==========================================

const customer = {
  name: "Aman",
  address: {
    city: "Kanpur",
    state: "Uttar Pradesh",
    pin: 208001
  }
};

console.log(customer.address.city);  // Kanpur
console.log(customer.address.state); // Uttar Pradesh
console.log(customer.address.pin);   // 208001


// ==========================================
// 12. OPTIONAL CHAINING (?.)
// Prevents errors if a property is missing
// ==========================================

const profile = {
  name: "Asha"
};

console.log(profile.address?.city);
// Output: undefined

// Without optional chaining, accessing
// profile.address.city would throw an error.


// ==========================================
// 13. OBJECT INSIDE AN ARRAY
// ==========================================

const students = [
  { name: "Asha", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Aman", marks: 78 }
];

console.log(students[0].name);  // Asha
console.log(students[1].marks); // 92

for (const s of students) {
  console.log(s.name, s.marks);
}

// Output:
// Asha 85
// Rahul 92
// Aman 78


// ==========================================
// 14. LOOPING THROUGH OBJECTS
// ==========================================

const details = {
  name: "Asha",
  age: 21,
  city: "Kanpur"
};

// for...in gives property keys
for (const key in details) {
  console.log(key, details[key]);
}

// Output:
// name Asha
// age 21
// city Kanpur


// ==========================================
// 15. Object.keys()
// Returns an array of keys
// ==========================================

console.log(Object.keys(details));

// Output: [ 'name', 'age', 'city' ]


// ==========================================
// 16. Object.values()
// Returns an array of values
// ==========================================

console.log(Object.values(details));

// Output: [ 'Asha', 21, 'Kanpur' ]


// ==========================================
// 17. Object.entries()
// Returns [key, value] pairs
// ==========================================

console.log(Object.entries(details));

// Output:
// [
//   [ 'name', 'Asha' ],
//   [ 'age', 21 ],
//   [ 'city', 'Kanpur' ]
// ]

for (const [key, value] of Object.entries(details)) {
  console.log(`${key}: ${value}`);
}


// ==========================================
// 18. CHECKING WHETHER A PROPERTY EXISTS
// ==========================================

const book = {
  title: "JavaScript Basics",
  price: 499
};

console.log("title" in book); // true
console.log("author" in book); // false

console.log(Object.hasOwn(book, "price"));  // true
console.log(Object.hasOwn(book, "author")); // false


// ==========================================
// 19. COPYING AN OBJECT USING SPREAD
// Creates a shallow copy
// ==========================================

const original = {
  name: "Asha",
  age: 21
};

const copy = { ...original };

copy.name = "Riya";

console.log(original.name); // Asha
console.log(copy.name);     // Riya


// ==========================================
// 20. Object.assign()
// Copies properties into a target object
// ==========================================

const first = {
  name: "Asha",
  age: 21
};

const second = Object.assign({}, first);

second.age = 25;

console.log(first.age);  // 21
console.log(second.age); // 25


// ==========================================
// 21. MERGING OBJECTS
// Later properties overwrite earlier ones
// ==========================================

const personal = {
  name: "Asha",
  age: 21
};

const extra = {
  city: "Kanpur",
  age: 22
};

const merged = { ...personal, ...extra };

console.log(merged);

// Output:
// { name: 'Asha', age: 22, city: 'Kanpur' }


// ==========================================
// 22. SHALLOW COPY VS NESTED OBJECTS
// ==========================================

const originalUser = {
  name: "Asha",
  address: {
    city: "Kanpur"
  }
};

const copiedUser = { ...originalUser };

copiedUser.name = "Riya";
copiedUser.address.city = "Lucknow";

console.log(originalUser.name);          // Asha
console.log(originalUser.address.city);  // Lucknow

// The nested address object is shared by both.
// Spread syntax does not make a deep copy.


// ==========================================
// 23. DEEP COPY USING structuredClone()
// For supported cloneable data
// ==========================================

const source = {
  name: "Asha",
  address: {
    city: "Kanpur"
  }
};

const deepCopy = structuredClone(source);

deepCopy.address.city = "Delhi";

console.log(source.address.city);   // Kanpur
console.log(deepCopy.address.city); // Delhi


// ==========================================
// 24. Object.freeze()
// Prevents adding, deleting or changing
// top-level properties
// ==========================================

const settings = {
  theme: "dark",
  language: "English"
};

Object.freeze(settings);

settings.theme = "light";
settings.fontSize = 16;

console.log(settings.theme);    // dark
console.log(settings.fontSize); // undefined

// freeze() is shallow: nested objects
// are not automatically frozen.


// ==========================================
// 25. Object.seal()
// Allows updating existing properties,
// but prevents adding or deleting properties
// ==========================================

const product = {
  name: "Laptop",
  price: 50000
};

Object.seal(product);

product.price = 45000;
product.brand = "Dell";
delete product.name;

console.log(product);

// Output:
// { name: 'Laptop', price: 45000 }


// ==========================================
// 26. COMPUTED PROPERTY NAMES
// Use a variable as a property name
// ==========================================

const key = "score";

const result = {
  name: "Asha",
  [key]: 95
};

console.log(result.score); // 95


// ==========================================
// 27. PROPERTY SHORTHAND
// When variable name and property name match
// ==========================================

const userName = "Asha";
const userAge = 21;

const userInfo = {
  userName,
  userAge
};

console.log(userInfo);

// Output:
// { userName: 'Asha', userAge: 21 }


// ==========================================
// 28. METHOD SHORTHAND
// ==========================================

const calculator = {
  add(a, b) {
    return a + b;
  },

  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(5, 3)); // 15


// ==========================================
// 29. OBJECT PROPERTY WITH A FUNCTION
// ==========================================

const math = {
  subtract: function (a, b) {
    return a - b;
  }
};

console.log(math.subtract(10, 4)); // 6


// ==========================================
// 30. OPTIONAL CHAINING WITH METHODS
// ==========================================

const member = {};

console.log(member.greet?.());
// Output: undefined


// ==========================================
// 31. NULLISH COALESCING (??)
// Uses the default only for null/undefined
// ==========================================

const userSettings = {
  volume: 0
};

console.log(userSettings.volume ?? 50);
// Output: 0

console.log(userSettings.brightness ?? 50);
// Output: 50


// ==========================================
// 32. OBJECT COMPARISON
// Objects are compared by reference
// ==========================================

const obj1 = { value: 10 };
const obj2 = { value: 10 };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// obj1 and obj2 have different references.
// obj1 and obj3 point to the same object.


// ==========================================
// 33. CONVERT OBJECT TO JSON
// ==========================================

const data = {
  name: "Asha",
  age: 21
};

const jsonString = JSON.stringify(data);

console.log(jsonString);
// Output: {"name":"Asha","age":21}


// ==========================================
// 34. CONVERT JSON BACK TO OBJECT
// ==========================================

const parsedData = JSON.parse(jsonString);

console.log(parsedData.name); // Asha
console.log(parsedData.age);  // 21


// ==========================================
// 35. PRACTICAL EXAMPLE: SHOPPING CART
// ==========================================

const cartItem = {
  name: "Keyboard",
  price: 1200,
  quantity: 2,

  getTotal() {
    return this.price * this.quantity;
  }
};

console.log(cartItem.name);     // Keyboard
console.log(cartItem.getTotal()); // 2400

cartItem.quantity = 3;

console.log(cartItem.getTotal()); // 3600


// ==========================================
// END OF OBJECTS
// ==========================================
