# Strings and Numbers

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### String basics
Strings are immutable; methods return new strings rather than changing the original.

### Template literals
Backticks support interpolation with `${expression}` and multiline text.

### Number conversion
`Number()`, `parseInt()`, and `parseFloat()` convert values; validate input when necessary.

### Floating point
Binary floating-point cannot represent some decimal fractions exactly.

## Run the examples
From the repository root, run `node 08-strings-and-numbers/strings-numbers.js` with a current Node.js installation.

## Practice exercises
- [ ] Count the characters in a sentence excluding spaces.
- [ ] Convert a numeric string and handle invalid input.

## Interview questions and answers

**Q: Are strings mutable?**

A: No. String methods return new strings.

**Q: What is NaN?**

A: A special numeric value representing an invalid numeric result; use Number.isNaN to test it.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
