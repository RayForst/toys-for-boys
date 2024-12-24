export default function () {
  const array = [82, 73, 54, 26, 39, 77, 57, 82, 55, 68, 99, 23, 95, 42, 89];
  let count = 0;

  function searchLinear(array, item) {
    for (let [i, value] of array.entries()) {
      ++count;
      if (item === value) return i;
    }

    return null;
  }

  console.log(`Result: ${searchLinear(array, 39)}, Count: ${count}`);
}
