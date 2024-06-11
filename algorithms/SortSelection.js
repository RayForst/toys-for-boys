const array = [0, 2, 9, 2, 6, 5, 6, 4, 3, 8, -1, -6, 5, 0, 12, 4, 1, 1, 7];
let count = 0;

function sortSelection(array) {
  for (let i = 0; i < array.length; i++) {
    let min = +i;
    for (let j = +i + 1; j < array.length; j++) {
      ++count;
      if (array[j] < array[min]) min = j;
    }

    if (min !== i) [array[min], array[i]] = [array[i], array[min]];
  }

  return array;
}

console.log(`Result: ${sortSelection(array)}, Count: ${count}`);
