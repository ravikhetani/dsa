function isPalindrome(string = '') {
  const sanitisedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  //remove special chars
  /**
   * Pointer at start
   * Pointer at end
   * compare  chars until p1 <= p2 to lowercase
   * if at any point chars arent the same return false
   * p1--, p2--
   * otherwise return true
   */

  let left = 0;
  let right = sanitisedString.length - 1;

  while (left <= right) {
    const leftString = sanitisedString[left];
    const rightString = sanitisedString[right];

    if (leftString !== rightString) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('acbca'));
console.log(isPalindrome('aabbaa'));
console.log(isPalindrome('aacbbaa'));
