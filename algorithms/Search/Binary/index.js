export default function () {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let count = 0;

  function searchBinary(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    ++count;

    if (item === array[middle]) return middle;

    if (item > middle) start = middle + 1;
    else end = middle - 1;

    return searchBinary(array, item, start, end);
  }

  console.log(
    `Result: ${searchBinary(array, 12, 0, array.length)}, Count: ${count}`
  );
}
