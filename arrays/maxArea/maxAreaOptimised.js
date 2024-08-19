function getMaxArea(heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const area = Math.min(heights[p1], heights[p2]) * (p2 - p1);
    maxArea = Math.max(area, maxArea);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(getMaxArea([8, 11, 1, 2, 3, 11]));
