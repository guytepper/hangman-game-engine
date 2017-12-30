const DEFAULT_CONFIG = {
  concealCharacter: '_'
};

function Engine() {
  this.word = '';
  this.charactersMap = [];
  this.config = {};
}

Engine.prototype.newGame = function newGame(word, config) {
  this.word = word;
  this.config = Object.assign({}, config, this.config);
  return this;
};

Engine.prototype.guess = function guess(char) {};

const e = new Engine().newGame('sup');
