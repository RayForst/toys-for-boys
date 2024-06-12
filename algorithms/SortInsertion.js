const array = [0, 2, 9, 2, 6, 5, 6, 4, 3, 8, -1, -6, 5, 0, 12, 4, 1, 1, 7];
let count = 0;

function sortInsertion(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = key;
  }

  return array;
}

console.log(`Result: ${sortInsertion(array)}, Count: ${count}`);
