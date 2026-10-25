# Prototypes and Inheritance

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Prototype chain
Objects can inherit properties and methods from another object through their prototype.

### Method lookup
JavaScript searches an object first, then its prototype chain.

### Class relationship
JavaScript classes use prototype-based inheritance under the hood.

### Avoid direct prototype mutation
Prefer classes or `Object.create()` for clearer, safer designs.

## Run the examples
From the repository root, run `node 22-prototypes-and-inheritance/prototypes.js` with a current Node.js installation.

## Practice exercises
- [ ] Inspect an object's prototype.
- [ ] Explain own properties versus inherited properties.

## Interview questions and answers

**Q: What is the prototype chain?**

A: The sequence of objects searched when a property is not found directly on an object.

**Q: Are classes prototype-based?**

A: Yes, class syntax uses prototypes for instance methods and inheritance.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
