// TOPIC: PROMISES
const successfulTask = new Promise((resolve) => {
  resolve("Task completed");
});

successfulTask
  .then(message => {
    console.log(message); // Task completed
    return 42;
  })
  .then(value => console.log(value)) // 42
  .catch(error => console.error(error))
  .finally(() => console.log("Finished"));

// Promise executors run immediately; .then handlers run asynchronously.
