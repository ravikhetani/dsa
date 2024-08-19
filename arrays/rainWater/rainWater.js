const { log } = require('console');

function getMaxWater(heights) {
  let maxWater = 0;

  for (i = 0; i < heights.length; i++) {
    let maxRight = 0;
    let maxLeft = 0;
    let leftPointer = i - 1;
    let rightPointer = i + 1;

    while (leftPointer >= 0) {
      maxLeft = Math.max(heights[leftPointer], maxLeft);
      leftPointer--;
    }

    while (rightPointer < heights.length) {
      maxRight = Math.max(heights[rightPointer], maxRight);
      rightPointer++;
    }

    const water = Math.min(maxLeft, maxRight) - heights[i];

    if (water > 0) {
      maxWater += water;
    }
  }

  return maxWater;
}

// const waterArr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const waterArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
// const waterArr = [0, 1, 0, 2];
console.log(getMaxWater(waterArr));
