const Utils = require('./Utils');

const DEFAULT_CONFIG = {
  concealCharacter: '_'
};

function Engine() {
  this.word = '';
  this.charactersMap = [];
  this.config = DEFAULT_CONFIG;
}

Engine.prototype.newGame = function newGame(word, config) {
  this.word = word;
  this.config = Object.assign({}, this.config, config);
  this.charactersMap = Utils.createConcealArr(word, this.config.concealCharacter);
  return this;
};

Engine.prototype.guess = function guess(char) {};

const e = new Engine().newGame('sup');

module.exports = Engine;
