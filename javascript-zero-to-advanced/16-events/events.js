// TOPIC: EVENTS
// Browser-only example. HTML should contain <button id="hello">Say hello</button>.
const button = document.querySelector("#hello");

button?.addEventListener("click", event => {
  console.log("Button clicked!", event.type); // Button clicked! click
});

// Optional chaining avoids an error if the button is missing.
// For forms, preventDefault() can stop a page reload while validating input.
