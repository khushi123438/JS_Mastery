# Local Storage and JSON

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### JSON
JSON is a text format for exchanging data; use `JSON.stringify` and `JSON.parse`.

### Local storage
Browser localStorage stores string key-value pairs across sessions.

### Storage limitations
Do not store passwords, secrets, or sensitive tokens in localStorage.

### Environment
localStorage is browser-only; the JSON examples also work in Node.js.

## Run the examples
From the repository root, run `node 26-local-storage-and-json/storage-json.js` with a current Node.js installation.

## Practice exercises
- [ ] Serialize and parse an object.
- [ ] Explain why secrets should not be stored in localStorage.

## Interview questions and answers

**Q: What does JSON.stringify do?**

A: Converts a JavaScript value to a JSON string when representable.

**Q: Is localStorage secure for secrets?**

A: No; scripts running on the origin may access it, so do not store sensitive secrets there.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
