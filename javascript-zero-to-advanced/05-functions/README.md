# Functions

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Function declaration
A named function declaration is hoisted, so it can be called before its declaration in the same scope.

### Parameters and return
Parameters receive inputs; `return` sends a result back to the caller.

### Arrow functions
Concise function syntax; arrow functions do not create their own `this` or `arguments`.

### Default parameters
Provide a fallback when an argument is omitted or `undefined`.

## Run the examples
From the repository root, run `node 05-functions/functions.js` with a current Node.js installation.

## Practice exercises
- [ ] Write a function that returns the larger of two numbers.
- [ ] Convert a normal function to an arrow function.

## Interview questions and answers

**Q: What does return do?**

A: It ends the current function call and provides a value to the caller.

**Q: How are arrow functions different?**

A: They do not have their own `this` or `arguments` binding.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
