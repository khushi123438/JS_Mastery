# Callbacks and Higher-Order Functions

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Callback
A callback is a function passed to another function to be called later or during its work.

### Higher-order function
A function that accepts a function, returns a function, or both.

### Synchronous callbacks
Examples include callbacks passed to `map`, `filter`, and `forEach`.

### Asynchronous callbacks
Timers and event handlers often invoke callbacks later.

## Run the examples
From the repository root, run `node 12-callbacks-and-higher-order-functions/callbacks.js` with a current Node.js installation.

## Practice exercises
- [ ] Write a function that accepts a formatter callback.
- [ ] Explain how map uses a callback.

## Interview questions and answers

**Q: What is a callback?**

A: A function passed to another function to be invoked by it.

**Q: What is a higher-order function?**

A: A function that accepts or returns another function.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
