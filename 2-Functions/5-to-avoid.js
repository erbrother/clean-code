/** Avoid using global / upper-scoped variables */

const codeFromUser = "let x = 5; let y = 10; let z = x + y";

// ❌ bad
// function splitCodeIntoLines() {
//   return codeFromUser.split(";");
// }

// ✅ good
function splitCodeIntoLines(code) {
  return code.split(";");
}

const lines = splitCodeIntoLines(codeFromUser);
console.log(lines);

/** Avoid changing the value of references */

// ❌ bad
// function addItemToCart(cart, item) {
//   cart.push({ item, data: Date.now() });
// }

// ✅ good
function addItemToCart(cart, item) {
  return [...cart, { item, data: Date.now() }];
}
