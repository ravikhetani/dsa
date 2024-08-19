function getMaxArea(heights) {
  let maxArea = 0;

  for (p1 = 0; p1 < heights.length; p1++) {
    for (p2 = p1 + 1; p2 < heights.length; p2++) {
      const area = Math.min(heights[p1], heights[p2]) * (p2 - p1);
      maxArea = Math.max(area, maxArea);
    }
  }

  return maxArea;
}

console.log(getMaxArea([4, 8, 1, 2, 3, 9]));

console.log(getMaxArea([8, 11, 1, 2, 3, 11]));
