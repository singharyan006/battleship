import Game from '../src/game';

describe('Game', () => {
  it('should initialize with two boards and players', () => {
    const game = Game();
    expect(game.board1).toBeDefined();
    expect(game.board2).toBeDefined();
    expect(typeof game.playTurn).toBe('function');
  });
});
