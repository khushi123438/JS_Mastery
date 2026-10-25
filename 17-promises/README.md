# Promises

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Promise states
A promise is pending, fulfilled, or rejected.

### then / catch / finally
`then` handles fulfillment, `catch` handles rejection, and `finally` runs after settlement.

### Chaining
Return values from `then` handlers become the next promise's fulfillment value.

### Promise.all
Waits for all promises to fulfill, or rejects as soon as one rejects.

## Run the examples
From the repository root, run `node 17-promises/promises.js` with a current Node.js installation.

## Practice exercises
- [ ] Create a promise that resolves with a value.
- [ ] Handle a rejected promise using catch.

## Interview questions and answers

**Q: What are promise states?**

A: Pending, fulfilled, and rejected.

**Q: Does fetch reject on HTTP 404?**

A: No. Check `response.ok` or status explicitly.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
