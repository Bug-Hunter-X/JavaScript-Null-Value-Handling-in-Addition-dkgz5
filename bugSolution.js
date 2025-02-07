function foo(a, b) {
  // Explicitly handle null values by coercing them to 0 before addition
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0

//Alternative solution: Throw an error if null is encountered
function foo2(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed');
  }
  return a + b;
}

//console.log(foo2(1,2)); //Output: 3
//console.log(foo2(null,2)); // Throws an error
//console.log(foo2(1, null)); // Throws an error
//console.log(foo2(null, null)); // Throws an error