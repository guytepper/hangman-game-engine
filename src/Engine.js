const Utils = require('./Utils');

const DEFAULT_CONFIG = {
  concealCharacter: '_'
};

function Engine() {
  this.word = ''; // The game word.
  this.hiddenWord = []; // The hidden characters array, e.g. ['_', '_', '_', '_'] for 'Baby'.
  this.charactersMap = []; // The characters array, e.g. ['B', 'a', 'b', 'y'] for 'Baby'.
  this.config = DEFAULT_CONFIG; // The game config object.
}

Engine.prototype.newGame = function newGame(word, config) {
  this.word = word;
  this.hiddenWord = Utils.createConcealArr(word, this.config.concealCharacter);
  this.charactersMap = [...word];
  this.config = Object.assign({}, this.config, config);
  return this;
};

Engine.prototype.guess = function guess(char) {};

const e = new Engine().newGame('sup');

module.exports = Engine;
