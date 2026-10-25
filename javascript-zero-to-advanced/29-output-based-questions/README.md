# Output-Based Questions

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Predict before running
Write down the output before executing the code.

### Focus areas
Scope, coercion, closures, `this`, arrays, promises, and the event loop are common interview themes.

### Explain why
Do not memorize outputs alone; explain the language rule responsible.

### Practice safely
Some examples are intentionally commented out because they throw errors.

## Run the examples
From the repository root, run `node 29-output-based-questions/solutions.js` with a current Node.js installation.

## Practice exercises
- [ ] Predict every output before running the file.
- [ ] Explain the var-versus-let timer example.

## Interview questions and answers

**Q: How should you solve output questions?**

A: Trace execution carefully and explain the language rule behind each output.

**Q: Why does var timer loop print 3 repeatedly?**

A: The callbacks share one function-scoped binding whose final value is 3.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
