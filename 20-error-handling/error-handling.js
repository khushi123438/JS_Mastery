// TOPIC: ERROR HANDLING
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // throws
} catch (error) {
  console.log("Error:", error.message); // Error: Cannot divide by zero
} finally {
  console.log("Operation finished");
}
