function compareStrings(s, t) {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    if (s[sPointer] === '#' || t[tPointer] === '#') {
      if (s[sPointer] === '#') {
        let backcount = 2;
        while (backcount > 0) {
          sPointer--;
          backcount--;
          if (s[sPointer] === '#') {
            backcount += 2;
          }
        }
      }
      if (t[tPointer] === '#') {
        let backcount = 2;
        while (backcount > 0) {
          tPointer--;
          backcount--;
          if (t[tPointer] === '#') {
            backcount += 2;
          }
        }
      }
    } else {
      console.log({ tPointer, sPointer });

      if (t[tPointer] !== s[sPointer]) {
        return false;
      }

      sPointer--;
      tPointer--;
    }
  }
  return true;
}

// abd

const myMap = new Map();
myMap.set('a', 'a');
myMap.get();
