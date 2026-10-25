# this and Execution Context

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Execution context
JavaScript creates execution contexts to manage code execution, lexical environments, and the call stack.

### this in methods
For a regular method call, `this` usually refers to the object before the dot.

### Arrow function this
Arrow functions capture `this` lexically from the surrounding scope.

### Call, apply, bind
These methods can set `this` for regular functions.

## Run the examples
From the repository root, run `node 10-this-and-execution-context/execution-context.js` with a current Node.js installation.

## Practice exercises
- [ ] Explain `this` in a method call.
- [ ] Try call, apply, and bind with a custom function.

## Interview questions and answers

**Q: What determines this for a method?**

A: For a regular method call, the call-site object before the dot typically becomes `this`.

**Q: What does bind do?**

A: It returns a new function with `this` and optionally leading arguments fixed.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
