// TOPIC: CLASSES AND OOP

// 1. Class and Object
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

const animal = new Animal("Animal");

console.log(animal.speak());
// Animal makes a sound


// 2. Multiple Objects from One Class
const cat = new Animal("Kitty");
const cow = new Animal("Cow");

console.log(cat.speak());
// Kitty makes a sound

console.log(cow.speak());
// Cow makes a sound


// 3. Inheritance - extends
class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog("Bruno");

console.log(dog.speak());
// Bruno barks


// 4. super() - Calling the Parent Constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `I am ${this.name}, aged ${this.age}.`;
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    study() {
        return `${this.name} studies ${this.course}.`;
    }
}

const student = new Student("Asha", 21, "Computer Science");

console.log(student.introduce());
// I am Asha, aged 21.

console.log(student.study());
// Asha studies Computer Science.


// 5. Method Overriding
class Vehicle {
    start() {
        return "Vehicle is starting";
    }
}

class Car extends Vehicle {
    start() {
        return "Car engine started";
    }
}

const car = new Car();

console.log(car.start());
// Car engine started


// 6. Calling a Parent Method with super
class Employee {
    work() {
        return "Employee is working";
    }
}

class Developer extends Employee {
    work() {
        return `${super.work()} on software development`;
    }
}

const developer = new Developer();

console.log(developer.work());
// Employee is working on software development


// 7. Encapsulation - Private Fields
class BankAccount {
    #balance = 0;

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            return "Amount must be positive";
        }

        this.#balance += amount;
        return "Deposit successful";
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Ravi", 1000);

console.log(account.getBalance());
// 1000

console.log(account.deposit(500));
// Deposit successful

console.log(account.getBalance());
// 1500

// console.log(account.#balance);
// SyntaxError: Private field cannot be accessed outside the class


// 8. Getters and Setters
class User {
    constructor(name) {
        this.name = name;
    }

    get username() {
        return this.name.toUpperCase();
    }

    set username(newName) {
        if (newName.trim() !== "") {
            this.name = newName;
        }
    }
}

const user = new User("asha");

console.log(user.username);
// ASHA

user.username = "riya";

console.log(user.username);
// RIYA


// 9. Static Methods
class MathHelper {
    static square(number) {
        return number * number;
    }

    static cube(number) {
        return number * number * number;
    }
}

console.log(MathHelper.square(5));
// 25

console.log(MathHelper.cube(3));
// 27

// Static methods belong to the class, not its instances.


// 10. Polymorphism
class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const shapes = [
    new Rectangle(4, 5),
    new Circle(3)
];

shapes.forEach(shape => {
    console.log(shape.area());
});
// 20
// Approximately 28.274


// 11. instanceof - Checking Object Type
console.log(dog instanceof Dog);
// true

console.log(dog instanceof Animal);
// true

console.log(dog instanceof Person);
// false


// 12. Practical Example: Product Class
class Product {
    constructor(name, price, stock = 0) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `${this.name}: Rs.${this.price}, Stock: ${this.stock}`;
    }

    sell(quantity) {
        if (quantity <= 0) {
            return "Quantity must be positive";
        }

        if (quantity > this.stock) {
            return "Not enough stock";
        }

        this.stock -= quantity;
        return `${quantity} ${this.name}(s) sold`;
    }
}

const laptop = new Product("Laptop", 50000, 5);

console.log(laptop.getDetails());
// Laptop: Rs.50000, Stock: 5

console.log(laptop.sell(2));
// 2 Laptop(s) sold

console.log(laptop.getDetails());
// Laptop: Rs.50000, Stock: 3

