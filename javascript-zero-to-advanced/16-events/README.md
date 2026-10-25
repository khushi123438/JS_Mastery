# Events

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Event listeners
Use `addEventListener` to respond to user actions.

### Event object
The event object contains information about the event and its target.

### Prevent default
`event.preventDefault()` prevents a browser's default action when appropriate.

### Event delegation
Listen on a parent and inspect `event.target` to handle many child elements.

## Run the examples
This topic needs a browser page with the required HTML elements. It will not run directly in plain Node.js.

## Practice exercises
- [ ] Add a click handler to a button.
- [ ] Explain event bubbling and event delegation.

## Interview questions and answers

**Q: What is event bubbling?**

A: An event can propagate from the target through ancestor elements.

**Q: What is event delegation?**

A: Handling child events with a listener on a shared ancestor.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
