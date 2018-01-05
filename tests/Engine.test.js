const HangmanEngine = require('../src/Engine');

it('Creates a new game', () => {
  const game = new HangmanEngine().newGame('baby');
  console.log(game);
  expect(game).toEqual(
    expect.objectContaining({
      word: expect.any(String),
      charactersMap: expect.any(Array),
      config: expect.any(Object)
    })
  );
});
