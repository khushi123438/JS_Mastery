// TOPIC: DESTRUCTURING AND SPREAD

// 1. Array Destructuring
const colors = ["red", "blue", "green"];

const [first, second] = colors;

console.log(first, second);
// red blue

// Skipping elements
const [primary, , tertiary] = colors;

console.log(primary, tertiary);
// red green

// Default values
const [a, b, c = "yellow"] = ["red", "blue"];

console.log(a, b, c);
// red blue yellow

// Swapping variables
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x, y);
// 20 10


// 2. Object Destructuring
const user = {
    name: "Asha",
    age: 21,
    role: "developer"
};

const { name, age } = user;

console.log(name, age);
// Asha 21

// Renaming variables
const { name: userName, role } = user;

console.log(userName, role);
// Asha developer

// Default values
const { city = "Kanpur" } = user;

console.log(city);
// Kanpur

// Renaming with a default value
const { country: userCountry = "India" } = user;

console.log(userCountry);
// India


// 3. Nested Destructuring
const student = {
    name: "Ravi",
    address: {
        city: "Delhi",
        country: "India"
    }
};

const {
    address: { city, country }
} = student;

console.log(city, country);
// Delhi India


// 4. Destructuring in Function Parameters
function displayUser({ name, role = "learner" }) {
    console.log(`${name} is a ${role}.`);
}

displayUser({ name: "Asha", role: "designer" });
// Asha is a designer.

displayUser({ name: "Ravi" });
// Ravi is a learner.


// 5. Spread Operator with Arrays
const original = [1, 2, 3];
const copy = [...original];

console.log(copy);
// [1, 2, 3]

// Combining arrays
const firstGroup = [1, 2];
const secondGroup = [3, 4];

const combined = [...firstGroup, ...secondGroup];

console.log(combined);
// [1, 2, 3, 4]

// Adding elements while copying
const updatedNumbers = [...original, 4, 5];

console.log(updatedNumbers);
// [1, 2, 3, 4, 5]

// Copying an array before sorting
const scores = [40, 10, 30, 20];
const sortedScores = [...scores].sort((a, b) => a - b);

console.log(sortedScores);
// [10, 20, 30, 40]

console.log(scores);
// [40, 10, 30, 20]


// 6. Spread Operator with Objects
const profile = {
    name: "Ravi",
    active: true
};

const profileCopy = { ...profile };

console.log(profileCopy);
// { name: "Ravi", active: true }

// Updating a property
const updatedProfile = {
    ...profile,
    active: false
};

console.log(updatedProfile);
// { name: "Ravi", active: false }

// Adding new properties
const detailedProfile = {
    ...profile,
    city: "Delhi",
    role: "student"
};

console.log(detailedProfile);
// { name: "Ravi", active: true, city: "Delhi", role: "student" }

// Later properties override earlier properties
const settings = {
    theme: "light",
    notifications: true
};

const newSettings = {
    ...settings,
    theme: "dark"
};

console.log(newSettings);
// { theme: "dark", notifications: true }


// 7. Rest Operator with Arrays
const [head, ...remaining] = [10, 20, 30, 40];

console.log(head);
// 10

console.log(remaining);
// [20, 30, 40]


// 8. Rest Operator with Objects
const account = {
    username: "asha21",
    email: "asha@example.com",
    password: "secret123"
};

const { password, ...publicAccount } = account;

console.log(publicAccount);
// { username: "asha21", email: "asha@example.com" }


// 9. Rest Parameters in Functions
function total(...values) {
    return values.reduce((sum, value) => sum + value, 0);
}

console.log(total(2, 3, 4));
// 9

console.log(total(10, 20, 30, 40));
// 100

// Rest parameters collect all arguments into an array.
function showItems(firstItem, ...otherItems) {
    console.log("First:", firstItem);
    console.log("Others:", otherItems);
}

showItems("Book", "Pen", "Bag");
// First: Book
// Others: ["Pen", "Bag"]


// 10. Spread Operator in Function Calls
function add(a, b, c) {
    return a + b + c;
}

const values = [2, 3, 4];

console.log(add(...values));
// 9


// 11. Shallow Copy Limitation
const originalUser = {
    name: "Asha",
    address: {
        city: "Kanpur"
    }
};

const copiedUser = { ...originalUser };

copiedUser.name = "Ravi";
copiedUser.address.city = "Delhi";

console.log(originalUser.name);
// Asha

console.log(originalUser.address.city);
// Delhi

// The outer object was copied, but the nested address object is shared.


// 12. Practical Example: Update User Profile
const currentUser = {
    name: "Asha",
    role: "learner",
    active: true
};

const { name: currentName, ...otherDetails } = currentUser;

const newUser = {
    ...otherDetails,
    name: "Riya",
    role: "developer"
};

console.log(newUser);
// { role: "developer", active: true, name: "Riya" }

console.log(currentUser);
// { name: "Asha", role: "learner", active: true }

