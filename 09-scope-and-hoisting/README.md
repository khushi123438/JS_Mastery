# Scope and Hoisting

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Global and local scope
A variable's scope determines where it can be accessed.

### Block scope
`let` and `const` are block-scoped; `var` is function-scoped.

### Hoisting
Declarations are processed before execution, but behavior differs by declaration type.

### Temporal dead zone
Accessing a `let` or `const` binding before its declaration throws a ReferenceError.

## Run the examples
From the repository root, run `node 09-scope-and-hoisting/scope-hoisting.js` with a current Node.js installation.

## Practice exercises
- [ ] Explain the difference between block and function scope.
- [ ] Predict what happens when let is accessed before declaration.

## Interview questions and answers

**Q: What is scope?**

A: The region where a variable binding can be accessed.

**Q: What is the temporal dead zone?**

A: The period before a let/const declaration is initialized, where access throws ReferenceError.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
