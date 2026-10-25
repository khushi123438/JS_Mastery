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


// PracticaL Implementation 


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background: #f4f4f4;
      transition: 0.3s;
    }

    .container {
      max-width: 600px;
      margin: auto;
      padding: 25px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 15px #0002;
    }

    .highlight {
      color: #6c5ce7;
      background: #eeeaff;
      padding: 10px;
      border-radius: 6px;
    }

    button {
      padding: 10px 15px;
      margin: 5px 3px;
      border: none;
      border-radius: 6px;
      background: #6c5ce7;
      color: white;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      transform: translateY(-2px);
      opacity: 0.85;
    }

    input {
      padding: 10px;
      width: 65%;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    li {
      margin: 10px 0;
      padding: 8px;
      background: #f0f0f0;
      border-radius: 5px;
      cursor: pointer;
    }

    .dark {
      background: #222;
      color: white;
    }

    .dark .container {
      background: #333;
    }

    .dark li {
      background: #444;
    }
  </style>
</head>

<body>
  <div class="container">

    <h1 id="title">Old Title</h1>

    <p id="description">
      This is a paragraph for DOM practice.
    </p>

    <button id="changeText">Change Text</button>
    <button id="changeStyle">Change Style</button>
    <button id="toggleTheme">Toggle Theme</button>

    <hr>

    <h2>1. Select and Modify Elements</h2>
    <p class="message">First message</p>
    <p class="message">Second message</p>

    <button id="changeAll">Change All Messages</button>

    <hr>

    <h2>2. Attributes</h2>
    <a id="myLink" href="https://www.google.com" target="_blank">
      Visit Google
    </a>

    <br><br>

    <button id="changeLink">Change Link</button>

    <hr>

    <h2>3. Add and Remove Elements</h2>

    <input id="itemInput" type="text" placeholder="Enter a task">

    <button id="addItem">Add Task</button>
    <button id="removeLast">Remove Last Task</button>

    <ul id="taskList">
      <li>Learn HTML</li>
      <li>Learn CSS</li>
    </ul>

    <hr>

    <h2>4. Form Handling</h2>

    <form id="myForm">
      <input
        type="text"
        id="username"
        placeholder="Enter your name"
      >

      <button type="submit">Submit</button>
    </form>

    <p id="result"></p>

    <hr>

    <h2>5. Event Handling</h2>
    <p id="counter">Button clicked: 0 times</p>
    <button id="countButton">Click Me</button>

  </div>

  <script>
    // 1. SELECTING ELEMENTS

    const title = document.querySelector("#title");
    const description = document.getElementById("description");

    const messages = document.querySelectorAll(".message");
    const firstMessage = document.querySelector(".message");

    // 2. CHANGE TEXT CONTENT

    title.textContent = "Learning the DOM";
    description.textContent = "DOM allows JavaScript to modify webpages.";

    // innerHTML can insert HTML markup.
    // Use it only with trusted HTML.
    firstMessage.innerHTML = "<strong>DOM manipulation started!</strong>";

    // 3. CHANGE CSS USING JAVASCRIPT

    title.classList.add("highlight");

    document.querySelector("#changeText").addEventListener("click", () => {
      title.textContent = "Text Changed Successfully!";
    });

    document.querySelector("#changeStyle").addEventListener("click", () => {
      title.style.color = "crimson";
      title.style.fontSize = "36px";
      title.style.backgroundColor = "#ffe5e5";
    });

    // 4. SELECT MULTIPLE ELEMENTS

    document.querySelector("#changeAll").addEventListener("click", () => {
      messages.forEach((message, index) => {
        message.textContent = `Message ${index + 1} updated!`;
        message.classList.add("highlight");
      });
    });

    // 5. CLASS MANIPULATION

    document.querySelector("#toggleTheme").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

    // 6. ATTRIBUTE MANIPULATION

    const link = document.querySelector("#myLink");

    document.querySelector("#changeLink").addEventListener("click", () => {
      link.setAttribute("href", "https://www.wikipedia.org");
      link.textContent = "Visit Wikipedia";

      console.log(link.getAttribute("href"));
      console.log(link.hasAttribute("target"));
    });

    // 7. CREATE AND APPEND ELEMENTS

    const input = document.querySelector("#itemInput");
    const taskList = document.querySelector("#taskList");

    document.querySelector("#addItem").addEventListener("click", () => {
      const task = input.value.trim();

      if (task === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = task;

      taskList.appendChild(li);
      input.value = "";
      input.focus();
    });

    // 8. REMOVE ELEMENTS

    document.querySelector("#removeLast").addEventListener("click", () => {
      const lastTask = taskList.lastElementChild;

      if (lastTask) {
        lastTask.remove();
      } else {
        alert("No tasks left!");
      }
    });

    // Click a task to remove it.
    taskList.addEventListener("click", (event) => {
      if (event.target.matches("li")) {
        event.target.remove();
      }
    });

    // 9. FORM HANDLING

    const form = document.querySelector("#myForm");
    const username = document.querySelector("#username");
    const result = document.querySelector("#result");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = username.value.trim();

      if (name === "") {
        result.textContent = "Please enter your name.";
        return;
      }

      result.textContent = `Welcome, ${name}!`;
      form.reset();
    });

    // 10. EVENT HANDLING AND COUNTER

    let count = 0;

    const counter = document.querySelector("#counter");
    const countButton = document.querySelector("#countButton");

    countButton.addEventListener("click", () => {
      count++;
      counter.textContent = `Button clicked: ${count} times`;
    });

    // 11. DOM TRAVERSAL EXAMPLES

    console.log("Parent:", title.parentElement);
    console.log("Next sibling:", title.nextElementSibling);
    console.log("All tasks:", taskList.children);
    console.log("First task:", taskList.firstElementChild);

    // 12. CHECK IF AN ELEMENT EXISTS

    const optionalElement = document.querySelector("#optional");

    if (optionalElement) {
      optionalElement.textContent = "Element found!";
    } else {
      console.log("Optional element does not exist.");
    }
  </script>
</body>
</html>
