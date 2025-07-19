import Ship from './ship';

export default function Gameboard(size = 10) {
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const ships = [];
  const missedAttacks = [];
  const attackedCoords = new Set();

  function placeShip(x, y, length, direction = 'horizontal') {
    const newShip = Ship(length);
    for (let i = 0; i < length; i++) {
      const row = direction === 'horizontal' ? x : x + i;
      const col = direction === 'horizontal' ? y + i : y;
      grid[row][col] = { ship: newShip, index: i };
    }
    ships.push(newShip);
  }

  function receiveAttack(x, y) {
    const key = `${x},${y}`;
    if (attackedCoords.has(key)) {
      throw new Error('Already attacked this coordinate');
    }
    attackedCoords.add(key);

    const cell = grid[x][y];
    if (cell && cell.ship) {
      cell.ship.hit();
    } else {
      missedAttacks.push([x, y]);
    }
  }

  function allShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  return {
    grid,
    placeShip,
    receiveAttack,
    allShipsSunk,
    missedAttacks,
  };
}
