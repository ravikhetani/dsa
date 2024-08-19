const { findTwoSum } = require('./twoSumWithArrays.js');

it('Should return null for empty array', () => {
  const result = findTwoSum(11, []);
  expect(result).toBeNull();
});

it('Should return indicies when pair of numbers found', () => {
  const result = findTwoSum(11, [1, 3, 7, 9, 2]);
  expect(result).toEqual([3, 4]);
});

it('Should return indicies when pair of numbers found', () => {
  const result = findTwoSum(11, [1, 3, 9, 7, 2]);
  expect(result).toEqual([2, 4]);
});

it('Should return null when pair of numbers NOT found', () => {
  const result = findTwoSum(11, [1, 3, 7, 6, 2]);
  expect(result).toEqual(null);
});
