const array = [0, 2, 9, 2, 6, 5, 6, 4, 3, 8, -1, -6, 5, 0, 12, 4, 1, 1, 7];
let count = 0;

function sortBubble(array) {
  let n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let j = 0; j < n - 1; j++) {
      ++count;
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return array;
}

console.log(`Result: ${sortBubble(array)}, Count: ${count}`);
