# Modules

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Why modules?
Modules split code into files with explicit imports and exports.

### Named exports
Export multiple named values and import them by name.

### Default exports
A module may have one default export.

### Environment
Use `.mjs` or set `"type": "module"` in package.json for Node.js ES modules.

## Run the examples
The file shows the pattern in comments. Create separate `.mjs` files or set `"type": "module"` in `package.json` to run module imports/exports.

## Practice exercises
- [ ] Split a helper into a named export.
- [ ] Import a default and named export.

## Interview questions and answers

**Q: Why use modules?**

A: They separate code and make dependencies explicit.

**Q: Named vs default export?**

A: Named exports are imported by their exported names; a module can have one default export.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
