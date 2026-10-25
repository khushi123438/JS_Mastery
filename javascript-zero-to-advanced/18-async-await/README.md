# Async/Await

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### async functions
Calling an async function always returns a promise.

### await
`await` pauses that async function until a promise settles; it does not block the entire JavaScript thread.

### Error handling
Use `try/catch` around awaited operations.

### Parallel work
Use `Promise.all` when independent operations can run concurrently.

## Run the examples
From the repository root, run `node 18-async-await/async-await.js` with a current Node.js installation.

## Practice exercises
- [ ] Rewrite a promise chain using async/await.
- [ ] Explain why try/catch is useful around await.

## Interview questions and answers

**Q: What does async return?**

A: An async function always returns a promise.

**Q: Does await block JavaScript entirely?**

A: No. It suspends the current async function while other work can continue.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
