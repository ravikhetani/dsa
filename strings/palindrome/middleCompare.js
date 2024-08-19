/**
  remove special chars

  if module=0

  if even number 
    p2=length/2
    p1=length/2 -1

    else
if odd number
    length/2 floor it

  
   * Pointer at start
   * Pointer at end
   * compare  chars until p1 <= p2 to lowercase
   * if at any point chars arent the same return false
   * p1--, p2--
   * otherwise return true
   
 **/

function isPalindrome(string) {
  const sanitisedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left, right;
  left = right = Math.floor(sanitisedString.length / 2);

  if (sanitisedString.length % 2 === 0) {
    left--;
  }

  console.log({ left, right });

  while (left >= 0) {
    console.log({ l: sanitisedString[left], r: sanitisedString[right] });

    if (sanitisedString[left] !== sanitisedString[right]) {
      return false;
    }
    left--;
    right++;
  }

  return true;
}

console.log(isPalindrome('race a car'));
