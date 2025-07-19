import createPlayer from '../src/player';
import createGameboard from '../src/gameboard';

describe('Player Factory Function', () => {
  let humanPlayer;
  let computerPlayer;
  let opponentBoard;

  beforeEach(() => {
    humanPlayer = createPlayer(false);
    computerPlayer = createPlayer(true);
    opponentBoard = createGameboard();
  });

  test('human player makes a valid move', () => {
    const coord = [2, 3];
    const result = humanPlayer.makeMove(opponentBoard, coord);
    expect(result).toEqual(coord);
    expect(humanPlayer.hasAlreadyAttacked(coord)).toBe(true);
  });

  test('throws error if human player reuses coordinate', () => {
    const coord = [5, 5];
    humanPlayer.makeMove(opponentBoard, coord);
    expect(() => {
      humanPlayer.makeMove(opponentBoard, coord);
    }).toThrow('Coordinate already attacked');
  });

  test('throws error if human player doesn’t provide coord', () => {
    expect(() => {
      humanPlayer.makeMove(opponentBoard);
    }).toThrow('Player must provide a coordinate');
  });

  test('computer makes a valid random move', () => {
    const result = computerPlayer.makeMove(opponentBoard);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(computerPlayer.hasAlreadyAttacked(result)).toBe(true);
  });

  test('computer never repeats a move', () => {
    const previousMoves = new Set();
    for (let i = 0; i < 10; i++) {
      const move = computerPlayer.makeMove(opponentBoard);
      const moveStr = move.toString();
      expect(previousMoves.has(moveStr)).toBe(false);
      previousMoves.add(moveStr);
    }
  });
});
