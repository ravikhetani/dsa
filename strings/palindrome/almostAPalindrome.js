function isAlmostPalindrome(string) {
  const sanitisedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = sanitisedString.length - 1;
  let removalCount = 0;

  while (left < right) {
    console.log({ l: sanitisedString[left], r: sanitisedString[right] });

    if (sanitisedString[left] !== sanitisedString[right]) {
      if (removalCount < 1) {
        if (sanitisedString[left + 1] == sanitisedString[right]) {
          left++;
          removalCount++;
        } else if (sanitisedString[left] == sanitisedString[right - 1]) {
          right--;
          removalCount++;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    left++;
    right--;
  }

  return true;
}

// console.log(isAlmostPalindrome('raceacar'));
// console.log(isAlmostPalindrome('abccdba'));
// console.log(isAlmostPalindrome('abcdefdba'));
// console.log(isAlmostPalindrome(''));
// console.log(isAlmostPalindrome('a'));
// console.log(isAlmostPalindrome('ab'));
// console.log(isAlmostPalindrome('aracecar'));
console.log(isAlmostPalindrome('aabbaa'));
console.log(isAlmostPalindrome('aabcbaa'));
