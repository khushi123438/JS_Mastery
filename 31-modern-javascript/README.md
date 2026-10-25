# Modern JavaScript

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Modern syntax
Learn template literals, destructuring, spread/rest, optional chaining, and nullish coalescing.

### Immutable updates
Create updated arrays/objects instead of mutating shared data when that improves clarity.

### Async patterns
Prefer async/await for readable asynchronous flows and handle errors intentionally.

### Compatibility
Check runtime support if targeting older browsers or environments.

## Run the examples
From the repository root, run `node 31-modern-javascript/modern-js.js` with a current Node.js installation.

## Practice exercises
- [ ] Use spread to copy and update an object.
- [ ] Rewrite a function with modern syntax.

## Interview questions and answers

**Q: What is optional chaining used for?**

A: Safely reading nested properties when intermediate values may be nullish.

**Q: Why prefer immutable updates sometimes?**

A: They reduce accidental shared-state changes and can make data flow easier to reason about.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
