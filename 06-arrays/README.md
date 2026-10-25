# Arrays

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Create and access
Arrays are ordered collections with zero-based indexes.

### Update elements
Assign to an index to replace an element; `length` reflects the array length.

### Common methods
`push` adds to the end, `pop` removes from the end, `slice` copies a range, and `splice` mutates.

### Iteration
Use `for...of` for values or indexed loops when the index matters.

## Run the examples
From the repository root, run `node 06-arrays/arrays.js` with a current Node.js installation.

## Practice exercises
- [ ] Find the sum of an array without reduce.
- [ ] Remove the last element and explain which method you used.

## Interview questions and answers

**Q: Are arrays zero-indexed?**

A: Yes, the first element is at index 0.

**Q: slice vs splice?**

A: slice returns a shallow copy of a range; splice mutates the array.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
