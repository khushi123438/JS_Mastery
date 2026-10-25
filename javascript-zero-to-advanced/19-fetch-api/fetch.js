// TOPIC: FETCH API
// Run in a browser or modern Node.js. Network access is required.
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Could not load users:", error.message);
  }
}
// Uncomment to make the request:
// loadUsers();
