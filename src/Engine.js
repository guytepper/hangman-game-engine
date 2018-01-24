const Utils = require('./Utils');

const DEFAULT_CONFIG = {
  concealCharacter: '_'
};

function Engine() {
  this.word = ''; // The game word.
  this.hiddenWord = []; // The hidden characters array, e.g. ['_', '_', '_', '_'] for 'Baby'.
  this.charactersMap = []; // The characters array, e.g. ['B', 'a', 'b', 'y'] for 'Baby'.
  this.uppercaseMap = []; // Same as charactersMap, but characters are uppercased (for easing guess checking).
  this.guessedLetters = [];
  this.totalGuesses = 0;
  this.failedGuesses = 0;
  this.config = DEFAULT_CONFIG; // The game config object.
}

/**
 * Starts a new game.
 * @param {string} word - The word to play the game with.
 * @param {Object} [config] - The game config.
 * @returns {Object} The engine object.
 */
Engine.prototype.newGame = function newGame(word, config) {
  this.word = word;
  this.config = Object.assign({}, this.config, config);
  this.hiddenWord = Utils.createConcealArr(word, this.config.concealCharacter);
  this.charactersMap = [...word];
  this.uppercaseMap = [...word].map(c => c.toUpperCase());
  return this;
};

Engine.prototype.guess = function guess(char) {
  const guessedLetters = [...this.guessedLetters];
  // Check if the guessed letter has been guessed already.
  if (!guessedLetters.includes(char)) {
    this.totalGuesses += 1;
    this.guessedLetters = [...this.guessedLetters, char];

    // Check indexes of the guessed letter in the letters array
    const indexes = Utils.getAllIndexes(this.uppercaseMap, char.toUpperCase());
    if (indexes.length > 0) {
      // Reveal the letters in the hidden characters array
      this.hiddenWord = Utils.changeArrayItems(this.hiddenWord, this.charactersMap, indexes);
    } else {
      this.failedGuesses += 1;
    }
  }

  return this;
};

const e = new Engine().newGame('sup');

module.exports = Engine;
