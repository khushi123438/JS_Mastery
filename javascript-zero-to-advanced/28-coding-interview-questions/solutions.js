// TOPIC: CODING INTERVIEW QUESTIONS

// 1. Reverse a string — O(n) time, O(n) extra space.
function reverseString(text) {
  return [...text].reverse().join("");
}
console.log(reverseString("hello")); // olleh

// 2. Find the largest number — O(n) time, O(1) extra space.
function findMax(numbers) {
  if (numbers.length === 0) throw new Error("Array must not be empty");
  let maximum = numbers[0];
  for (const number of numbers) {
    if (number > maximum) maximum = number;
  }
  return maximum;
}
console.log(findMax([3, 9, 2, 7])); // 9

// 3. Count character frequency — O(n) expected time.
function charFrequency(text) {
  const counts = {};
  for (const char of text) counts[char] = (counts[char] ?? 0) + 1;
  return counts;
}
console.log(charFrequency("aba")); // { a: 2, b: 1 }
