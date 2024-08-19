function findTwoSum(target, arrayOfNumbers) {
  let result = null;

  for (i = 0; i < arrayOfNumbers.length; i++) {
    const numToFind = target - arrayOfNumbers[i];
    for (j = i + 1; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[j] === numToFind) {
        return [i, j];
      }
    }
  }
  return result;
}

console.log(findTwoSum(11, [1, 3, 7, 9, 2]));
console.log(findTwoSum(11, []));
console.log(findTwoSum(11, [1, 3, 7, 9, 6]));

module.exports = { findTwoSum };
