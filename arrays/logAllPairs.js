function logAllPairs() {
  const numbers = [1, 2, 3, 4, 5];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      //   if (j !== i) {
      //     console.log(numbers[i] + ',' + numbers[j]);
      //   }
      console.log(numbers[i] + ',' + numbers[j]);
    }
  }
}

logAllPairs(); //ask question, do you want to include the item paired with itself?
