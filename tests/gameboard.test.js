import Gameboard from '../src/gameboard';
import Ship from '../src/ship';

describe('Gameboard', () => {
  let board;

  beforeEach(() => {
    board = Gameboard();
  });

  test('places a ship horizontally', () => {
    board.placeShip(0, 0, 3, 'horizontal');
    expect(board.grid[0][0]).toBeDefined();
    expect(board.grid[0][1]).toBeDefined();
    expect(board.grid[0][2]).toBeDefined();
  });

  test('places a ship vertically', () => {
    board.placeShip(0, 0, 3, 'vertical');
    expect(board.grid[0][0]).toBeDefined();
    expect(board.grid[1][0]).toBeDefined();
    expect(board.grid[2][0]).toBeDefined();
  });

  test('records a hit correctly', () => {
    board.placeShip(0, 0, 2, 'horizontal');
    board.receiveAttack(0, 0);
    expect(board.grid[0][0].ship.isSunk()).toBe(false);
  });

  test('records a miss correctly', () => {
    board.receiveAttack(5, 5);
    expect(board.missedAttacks).toContainEqual([5, 5]);
  });

  test('prevents double attacks on same cell', () => {
    board.receiveAttack(3, 3);
    expect(() => board.receiveAttack(3, 3)).toThrow('Already attacked this coordinate');
  });

  test('detects when all ships are sunk', () => {
    board.placeShip(0, 0, 2, 'horizontal');
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    expect(board.allShipsSunk()).toBe(true);
  });
});
