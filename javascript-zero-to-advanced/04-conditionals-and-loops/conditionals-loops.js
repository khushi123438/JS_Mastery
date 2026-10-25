// TOPIC: CONDITIONALS AND LOOPS
const marks = 82;
if (marks >= 90) console.log("Grade A");
else if (marks >= 75) console.log("Grade B");
else console.log("Keep practising");
// Output: Grade B

for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// Output: 1, then 2, then 3

let count = 0;
while (count < 2) {
  console.log("count:", count);
  count++;
}
// Output: count: 0; count: 1
