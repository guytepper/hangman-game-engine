/**
 * Checks if a string is an alphabetical character.
 * @param {string} str - The string to check if it's alphabetical.
 * @returns {bool} Whether the string is alphabetical or not.
 */
function isAlphabetical(str) {
  if (str.match(/[a-z]/i)) {
    return true;
  }
  return false;
}

/**
 * Creates an array of conceal characters instead of the word letters.
 * @param {string} word - The word to create the conceal array from.
 * @param {string} cocnealChar - The conceal character to swap the word's letter with.
 * @returns {array} The conceal word array.
 */
function createConcealArr(word, concealChar = '_') {
  const hiddenArray = [...word].map(letter => {
    if (isAlphabetical(letter)) {
      return concealChar;
    }
    // In case the character is non-alphabetical (such as '!'),
    // use it instead of hiding it.
    return letter;
  });

  return hiddenArray;
}

module.exports = { isAlphabetical, createConcealArr };
