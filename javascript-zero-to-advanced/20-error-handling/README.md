# Error Handling

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### try/catch/finally
Use `try` for risky code, `catch` to handle thrown errors, and `finally` for cleanup.

### throw
Throw an Error object to signal failure.

### Custom errors
Custom classes can represent domain-specific failure types.

### Fail clearly
Validate inputs early and provide useful error messages without exposing secrets.

## Run the examples
From the repository root, run `node 20-error-handling/error-handling.js` with a current Node.js installation.

## Practice exercises
- [ ] Write a function that throws for invalid input.
- [ ] Create a custom error class.

## Interview questions and answers

**Q: Why throw Error objects?**

A: They provide a message and stack trace useful for debugging.

**Q: What does finally do?**

A: Runs after try/catch handling, commonly for cleanup.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
