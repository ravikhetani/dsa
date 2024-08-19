let factor = 1;

function getFactor(number) {
  let newNumber = number / 2;
  if (newNumber > 1) {
    factor++;
    getFactor(newNumber);
  }
  return factor;
}

console.log(getFactor(1.267650600228229e30));
