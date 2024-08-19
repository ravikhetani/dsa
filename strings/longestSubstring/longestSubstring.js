function lengthOfLongestSubstring(string) {
  let longestTotal = 0;

  for (left = 0; left < string.length; left++) {
    let charMap = new Map();
    let currentLongest = 0;

    for (right = left; right < string.length; right++) {
      if (!charMap.has(string[right])) {
        charMap.set(string[right]);
        currentLongest++;
        longestTotal = Math.max(currentLongest, longestTotal);
      } else {
        break;
      }
    }
  }
  return longestTotal;
}

console.log(lengthOfLongestSubstring('abcbda'));
