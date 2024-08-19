function lengthOfLongestSubstring(myString = '') {
  let longestTotal = 0;
  let left = 0;
  let charMap = new Map();

  if (myString.length <= 1) {
    return myString.length;
  }

  for (let right = 0; right < myString.length; right++) {
    const currentChar = myString[right];
    const previousSeenChar = charMap.get(currentChar);

    if (previousSeenChar >= left) {
      left = previousSeenChar + 1;
    }

    charMap.set(currentChar, right);

    longestTotal = Math.max(longestTotal, right - left + 1);
    console.log({
      left,
      right,
      currentChar,
      previousSeenChar,
      longestTotal,
    });
  }

  return longestTotal;
}

console.log(lengthOfLongestSubstring('abcabdbb'));
