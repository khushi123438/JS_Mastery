# Advanced JavaScript

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Optional chaining
`?.` safely accesses a property when the preceding value is nullish.

### Nullish coalescing
`??` supplies a fallback only for null or undefined.

### Symbols
Symbols create unique primitive values often used as object keys.

### Iterators and generators
Generators use `function*` and `yield` to produce values lazily.

## Run the examples
From the repository root, run `node 24-advanced-javascript/advanced.js` with a current Node.js installation.

## Practice exercises
- [ ] Use optional chaining on nested data.
- [ ] Write a generator that yields three values.

## Interview questions and answers

**Q: What does optional chaining do?**

A: It safely stops property access when the preceding value is null or undefined.

**Q: What is a generator?**

A: A function that can pause and resume, yielding values with `yield`.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
