// TOPIC: CLOSURES
function createCounter() {
  let count = 0; // Private to the returned closure.
  return function increment() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function makeMultiplier(factor) {
  return number => number * factor;
}
const double = makeMultiplier(2);
console.log(double(7)); // 14
