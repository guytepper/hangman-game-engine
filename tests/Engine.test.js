const HangmanEngine = require('../src/Engine');

it('Creates a new game', () => {
  const game = new HangmanEngine().newGame('baby');

  expect(game).toEqual(
    expect.objectContaining({
      word: expect.any(String),
      hiddenWord: expect.any(Array),
      charactersMap: expect.any(Array),
      config: expect.any(Object)
    })
  );
});
