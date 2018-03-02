const HangmanEngine = require('../src/Engine');

it('Creates a new game', () => {
  const game = new HangmanEngine().newGame('Baby');

  expect(game).toEqual(
    expect.objectContaining({
      word: 'Baby',
      hiddenWord: ['_', '_', '_', '_'],
      charactersMap: ['B', 'a', 'b', 'y'],
      uppercaseMap: ['B', 'A', 'B', 'Y'],
      guessedLetters: [],
      totalGuesses: 0,
      failedGuesses: 0,
      status: 'IN_PROGRESS',
      config: { concealCharacter: '_', maxAttempt: 4 }
    })
  );
});

it('Guesses a character', () => {
  const game = new HangmanEngine().newGame('Baby');
  game.guess('a');
  game.guess('c');

  expect(game).toEqual(
    expect.objectContaining({
      hiddenWord: ['_', 'a', '_', '_'],
      guessedLetters: ['a', 'c'],
      totalGuesses: 2,
      failedGuesses: 1
    })
  );
});
