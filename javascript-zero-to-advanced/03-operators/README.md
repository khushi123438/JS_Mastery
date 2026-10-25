# Operators

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Arithmetic operators
`+`, `-`, `*`, `/`, `%`, and `**` perform arithmetic. `+` can also concatenate strings.

### Comparison operators
Prefer strict equality (`===`, `!==`) to avoid implicit type conversion.

### Logical operators
`&&`, `||`, and `!` combine conditions; `&&` and `||` short-circuit.

### Nullish coalescing
`??` uses a fallback only for `null` or `undefined`, unlike `||`, which also treats 0 and empty strings as falsy.

## Run the examples
From the repository root, run `node 03-operators/operators.js` with a current Node.js installation.

## Practice exercises
- [ ] Predict the results of `0 || 5` and `0 ?? 5`.
- [ ] Compare `==` and `===` with examples.

## Interview questions and answers

**Q: Why prefer ===?**

A: It compares without implicit type coercion, making comparisons more predictable.

**Q: Difference between || and ???**

A: `||` falls back for any falsy value; `??` only for null or undefined.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
