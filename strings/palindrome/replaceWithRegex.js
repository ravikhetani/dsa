const stringToReplace = 'A man, a plan, a canal: Panama';

function replaceInvalidChars(string = '') {
  const newString = string.replace(/[^A-Za-z0-9]/g, '');
  return newString;
}
