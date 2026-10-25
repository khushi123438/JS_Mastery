# Memory and Event Loop

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Call stack
The call stack tracks currently executing functions.

### Task queues
Timers and many event callbacks are queued for later execution.

### Microtasks
Promise reactions generally run before the next timer task.

### Memory management
Garbage collection can reclaim unreachable objects; avoid unnecessary retained references.

## Run the examples
From the repository root, run `node 25-memory-and-event-loop/event-loop.js` with a current Node.js installation.

## Practice exercises
- [ ] Predict the order of a promise and setTimeout callback.
- [ ] Explain what makes an object eligible for garbage collection.

## Interview questions and answers

**Q: What is the event loop?**

A: The mechanism coordinating synchronous execution with queued asynchronous callbacks.

**Q: What are microtasks?**

A: A high-priority queue including promise reactions, usually processed before the next task.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
