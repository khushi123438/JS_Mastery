// TOPIC: ASYNC/AWAIT
const waitForValue = value =>
  new Promise(resolve => resolve(value));

async function main() {
  try {
    const result = await waitForValue("Ready!");
    console.log(result); // Ready!
  } catch (error) {
    console.error("Something failed:", error);
  }
}
main();

// For independent tasks, consider:
// const [a, b] = await Promise.all([taskA(), taskB()]);
