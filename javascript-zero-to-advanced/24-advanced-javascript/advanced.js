// TOPIC: ADVANCED JAVASCRIPT
const user = { profile: { name: "Asha" } };
console.log(user.profile?.name); // Asha
console.log(user.settings?.theme); // undefined

const theme = null;
console.log(theme ?? "light"); // light

function* ids() {
  yield 1;
  yield 2;
}
for (const id of ids()) console.log(id); // 1 then 2

const uniqueKey = Symbol("id");
console.log(typeof uniqueKey); // symbol
