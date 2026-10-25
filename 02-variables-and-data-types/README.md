# Variables and Data Types

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Variable declarations
Use `const` by default, `let` when reassignment is needed, and avoid `var` in modern code unless you understand its function-scoped behavior.

### Primitive types
string, number, bigint, boolean, undefined, null, and symbol are primitive types.

### typeof
`typeof` reports a value's type, but `typeof null` is the historical exception that returns `object`.

### Mutation vs reassignment
A `const` object binding cannot be reassigned, but the object's properties may still be changed.

## Run the examples
From the repository root, run `node 02-variables-and-data-types/variables.js` with a current Node.js installation.

## Practice exercises
- [ ] Create one example of each primitive type.
- [ ] Explain why a const object can still have a property changed.

## Interview questions and answers

**Q: let vs const?**

A: Both are block-scoped. `let` can be reassigned; `const` cannot be reassigned after initialization.

**Q: What does typeof null return?**

A: `object`, a long-standing historical quirk.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
