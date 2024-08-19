function findTwoSumWithMap(target, arrayOfNumbers) {
  const numsToIndiciesMap = new Map();

  for (i = 0; i < arrayOfNumbers.length; i++) {
    const currentMapVal = numsToIndiciesMap.get(arrayOfNumbers[i]);
    if (currentMapVal !== undefined) {
      return [i, currentMapVal];
    } else {
      const numToFind = target - arrayOfNumbers[i];
      numsToIndiciesMap.set(numToFind, i);
    }
  }

  return null;
}

module.exports = { findTwoSumWithMap };
