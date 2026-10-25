# Closures

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Definition
A closure is a function together with access to variables from its lexical environment.

### Why useful?
Closures support private state, callbacks, factories, and function configuration.

### Persistent state
An inner function can keep access to outer variables after the outer function returns.

### Common pitfall
Closures capture bindings, not frozen snapshots of values.

## Run the examples
From the repository root, run `node 11-closures/closures.js` with a current Node.js installation.

## Practice exercises
- [ ] Build a counter that can increment and reset.
- [ ] Explain why the counter retains its value.

## Interview questions and answers

**Q: What is a closure?**

A: A function that retains access to variables from its lexical environment.

**Q: Give a practical use.**

A: Private state, function factories, callbacks, and memoization.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
