// TOPIC: PROTOTYPES AND INHERITANCE
const animal = {
  speak() {
    return `${this.name} makes a sound`;
  }
};
const dog = Object.create(animal);
dog.name = "Bruno";

console.log(dog.speak()); // Bruno makes a sound
console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(Object.hasOwn(dog, "name")); // true
console.log(Object.hasOwn(dog, "speak")); // false
