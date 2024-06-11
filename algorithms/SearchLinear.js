const arr = [82, 73, 54, 26, 39, 77, 57, 82, 55, 68, 99, 23, 95, 42, 89];
let count = 0;

function searchLinear(arr, item) {
  for (let [i, value] of arr.entries()) {
    ++count;
    if (item === value) return i;
  }

  return null;
}

console.log(`Result: ${searchLinear(arr, 39)}, Count: ${count}`);
