// TOPIC: LOCAL STORAGE AND JSON
const learner = { name: "Asha", completed: 3 };
const jsonText = JSON.stringify(learner);
console.log(jsonText); // {"name":"Asha","completed":3}

const restored = JSON.parse(jsonText);
console.log(restored.name); // Asha

// Browser-only example:
// localStorage.setItem("learner", jsonText);
// const saved = JSON.parse(localStorage.getItem("learner") ?? "null");
// Never store passwords or other secrets in localStorage.
