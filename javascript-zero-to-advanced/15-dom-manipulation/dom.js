// TOPIC: DOM MANIPULATION
// Browser-only example: add this script to an HTML page with an element
// such as <h1 id="title">Old title</h1>.
const title = document.querySelector("#title");

if (title) {
  title.textContent = "Learning the DOM";
  title.classList.add("highlight");
}

// querySelector returns the first match or null.
// Always check that an element exists before using it.
