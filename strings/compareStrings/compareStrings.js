function checkEquality(s, t) {
  const finalS = buildString(s);
  const finalT = buildString(t);

  if (finalS.length === finalT.length) {
    for (i = 0; i < finalS.length; i++) {
      if (finalS[i] !== finalT[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

function buildString(string) {
  const builtString = [];

  for (const char of string) {
    if (char === '#') {
      builtString.pop();
    } else {
      builtString.push(char);
    }
  }

  return builtString;
}

console.log(checkEquality('ab#z', 'ab#z'));
