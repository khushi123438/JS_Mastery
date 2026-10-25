// TOPIC: OBJECTS
const user = {
  name: "Asha",
  age: 21,
  greet() {
    return `Hi, I am ${this.name}`;
  }
};
console.log(user.name);       // Asha
console.log(user["age"]);     // 21
user.city = "Kanpur";
console.log(user.greet());    // Hi, I am Asha

const { name, city } = user;
console.log(name, city);      // Asha Kanpur
