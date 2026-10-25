# DOM Manipulation

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### DOM
The Document Object Model represents an HTML page as a tree of objects.

### Selecting elements
Use methods such as `querySelector` and `querySelectorAll`.

### Changing content
Use `textContent` for text; avoid injecting untrusted strings with `innerHTML`.

### Environment
Run this file from a browser page, not plain Node.js.

## Run the examples
This topic needs a browser page with the required HTML elements. It will not run directly in plain Node.js.

## Practice exercises
- [ ] Select an element and update its text.
- [ ] Create a new list item using createElement.

## Interview questions and answers

**Q: What is the DOM?**

A: An object representation of an HTML document.

**Q: Why prefer textContent for text?**

A: It treats content as text rather than parsing it as HTML.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
