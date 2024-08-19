const { findTwoSumWithMap } = require('./twoSumWithMap.js');

it('Should return null for empty array', () => {
  const result = findTwoSumWithMap(11, []);
  expect(result).toBeNull();
});

it('Should return indicies when pair of numbers found', () => {
  const result = findTwoSumWithMap(11, [1, 3, 7, 9, 2]);
  expect(result).toEqual(expect.arrayContaining([3, 4]));
});

it('Should return indicies when pair of numbers found', () => {
  const result = findTwoSumWithMap(11, [1, 3, 9, 7, 2]);
  expect(result).toEqual(expect.arrayContaining([2, 4]));
});

it('Should return null when pair of numbers NOT found', () => {
  const result = findTwoSumWithMap(11, [1, 3, 7, 6, 2]);
  expect(result).toEqual(null);
});
