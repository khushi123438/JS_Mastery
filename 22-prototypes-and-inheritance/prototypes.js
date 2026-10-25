// TOPIC: PROTOTYPES AND INHERITANCE

// 1. Basic Prototype Inheritance
const animal = {
    speak() {
        return `${this.name} makes a sound`;
    }
};

const dog = Object.create(animal);
dog.name = "Bruno";

console.log(dog.speak());
// Bruno makes a sound

console.log(Object.getPrototypeOf(dog) === animal);
// true

console.log(Object.hasOwn(dog, "name"));
// true

console.log(Object.hasOwn(dog, "speak"));
// false


// 2. Own Properties vs Inherited Properties
console.log(dog.name);
// Bruno - own property

console.log(dog.speak);
// inherited method

console.log("name" in dog);
// true

console.log("speak" in dog);
// true

console.log(Object.keys(dog));
// ["name"]


// 3. Prototype Chain
const livingThing = {
    breathe() {
        return `${this.name} is breathing`;
    }
};

const animalPrototype = Object.create(livingThing);

animalPrototype.speak = function () {
    return `${this.name} makes a sound`;
};

const puppy = Object.create(animalPrototype);
puppy.name = "Max";

console.log(puppy.speak());
// Max makes a sound

console.log(puppy.breathe());
// Max is breathing

console.log(Object.getPrototypeOf(puppy) === animalPrototype);
// true

console.log(Object.getPrototypeOf(animalPrototype) === livingThing);
// true


// 4. Method Overriding
const parentAnimal = {
    speak() {
        return `${this.name} makes a sound`;
    }
};

const dogPrototype = Object.create(parentAnimal);

dogPrototype.speak = function () {
    return `${this.name} barks`;
};

const bruno = Object.create(dogPrototype);
bruno.name = "Bruno";

console.log(bruno.speak());
// Bruno barks

// JavaScript finds the nearest matching method in the prototype chain.


// 5. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return `I am ${this.name}, aged ${this.age}.`;
};

const person1 = new Person("Asha", 21);
const person2 = new Person("Ravi", 22);

console.log(person1.introduce());
// I am Asha, aged 21.

console.log(person2.introduce());
// I am Ravi, aged 22.

console.log(person1.introduce === person2.introduce);
// true


// 6. How new Works with Constructor Functions
function Student(name) {
    this.name = name;
}

Student.prototype.study = function () {
    return `${this.name} is studying`;
};

const student = new Student("Riya");

console.log(student.study());
// Riya is studying

console.log(Object.getPrototypeOf(student) === Student.prototype);
// true

console.log(student instanceof Student);
// true


// 7. Inheritance with Constructor Functions
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    return `${this.name} barks`;
};

const myDog = new Dog("Bruno", "Labrador");

console.log(myDog.speak());
// Bruno makes a sound

console.log(myDog.bark());
// Bruno barks

console.log(myDog.breed);
// Labrador

console.log(myDog instanceof Dog);
// true

console.log(myDog instanceof Animal);
// true


// 8. Prototype Property Sharing
function Employee(name) {
    this.name = name;
}

Employee.prototype.company = "Tech Solutions";

const employee1 = new Employee("Asha");
const employee2 = new Employee("Ravi");

console.log(employee1.company);
// Tech Solutions

console.log(employee2.company);
// Tech Solutions

Employee.prototype.company = "AI Solutions";

console.log(employee1.company);
// AI Solutions

console.log(employee2.company);
// AI Solutions


// 9. Shadowing an Inherited Property
const parent = {
    role: "learner"
};

const child = Object.create(parent);

console.log(child.role);
// learner

child.role = "developer";

console.log(child.role);
// developer

console.log(parent.role);
// learner

console.log(Object.hasOwn(child, "role"));
// true


// 10. Object.create(null)
const dictionary = Object.create(null);

dictionary.language = "JavaScript";

console.log(dictionary.language);
// JavaScript

console.log(Object.getPrototypeOf(dictionary));
// null

console.log(Object.hasOwn(dictionary, "language"));
// true


// 11. Class Methods Also Use Prototypes
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        return `${this.name} started`;
    }
}

const car = new Vehicle("Honda");

console.log(car.start());
// Honda started

console.log(Object.getPrototypeOf(car) === Vehicle.prototype);
// true

console.log(Object.hasOwn(car, "name"));
// true

console.log(Object.hasOwn(car, "start"));
// false


// 12. Prototype Chain Ends at null
const example = {};

console.log(Object.getPrototypeOf(example) === Object.prototype);
// true

console.log(Object.getPrototypeOf(Object.prototype));
// null

