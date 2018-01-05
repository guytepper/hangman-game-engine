const utils = require('../src/Utils');

it('Checks if a string is alphabetical', () => {
  expect(utils.isAlphabetical('a')).toBe(true);
  expect(utils.isAlphabetical('-')).toBe(false);
  expect(utils.isAlphabetical('&')).toBe(false);
});

it('Creates an array of conceal characters', () => {
  const word = 'baby';
  const concealArr = utils.createConcealArr('baby');
  const expectedArr = ['_', '_', '_', '_'];

  expect(concealArr).toEqual(expectedArr);
});
