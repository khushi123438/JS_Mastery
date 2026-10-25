// TOPIC: THIS AND EXECUTION CONTEXT
const person = {
  name: "Asha",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
person.greet(); // Hello, Asha

function introduce(city) {
  console.log(`${this.name} lives in ${city}`);
}
introduce.call({ name: "Ravi" }, "Kanpur"); // Ravi lives in Kanpur
introduce.apply({ name: "Mina" }, ["Delhi"]); // Mina lives in Delhi
const bound = introduce.bind({ name: "Zoya" });
bound("Lucknow"); // Zoya lives in Lucknow

// Arrow functions do not have their own this.
