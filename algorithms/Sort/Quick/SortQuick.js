const array = [0, 2, 9, 2, 6, 5, 6, 4, 3, 8, -1, -6, 5, 0, 12, 4, 1, 1, 7];
let count = 0;

function sortQuick(array) {
  if (array.length <= 1) return array;

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    ++count;
    if (i === pivotIndex) continue;
    if (pivot < array[i]) {
      greater.push(array[i]);
    } else {
      less.push(array[i]);
    }
  }
  return [...sortQuick(less), pivot, ...sortQuick(greater)];
}
console.log(`Result: ${sortQuick(array)}, Count: ${count}`);
