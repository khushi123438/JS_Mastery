# Fetch API

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### fetch basics
`fetch()` sends an HTTP request and returns a promise for a Response.

### Check response.ok
HTTP errors such as 404 do not automatically reject the fetch promise.

### Parse JSON
`response.json()` is asynchronous and returns a promise.

### Handle failures
Catch network/parsing errors and separately check HTTP status.

## Run the examples
Run `node fetch.js` in a modern Node.js version or use a browser console. Uncomment the function call to make the network request; internet access is required.

## Practice exercises
- [ ] Check response.ok before parsing JSON.
- [ ] Handle a network error and an HTTP error.

## Interview questions and answers

**Q: What does fetch return?**

A: A promise that fulfills with a Response when a response is available.

**Q: Why check response.ok?**

A: HTTP error statuses do not automatically reject fetch.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
