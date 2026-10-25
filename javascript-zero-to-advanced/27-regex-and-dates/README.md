# Regular Expressions and Dates

## Learning objectives
By the end of this topic, you should be able to explain the key concepts, read the examples, and solve basic problems independently.

## Concepts

### Regular expressions
Regex patterns match or validate text; use them carefully and test edge cases.

### test and match
`test()` returns a boolean; `match()` returns match details or null.

### Date
Date represents a timestamp; formatting depends on locale and timezone.

### Validation caution
For complex inputs such as email addresses, use practical validation rather than assuming one regex is perfect.

## Run the examples
From the repository root, run `node 27-regex-and-dates/regex-dates.js` with a current Node.js installation.

## Practice exercises
- [ ] Write a regex for a 6-digit code.
- [ ] Format a date in UTC using ISO output.

## Interview questions and answers

**Q: What is regex?**

A: A pattern language for matching and working with text.

**Q: Why use UTC date methods?**

A: They avoid differences caused by local timezone when extracting date components.

## Common mistakes
- Memorizing syntax without understanding the output.
- Ignoring empty inputs, missing values, and error cases.
- Confusing browser APIs with Node.js APIs.
- Assuming object/array spread makes a deep copy.
