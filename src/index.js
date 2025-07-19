import Player from './player.js';

function getRandomCoord() {
  return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

function placeDefaultShips(player) {
  const shipLengths = [5, 4, 3, 3, 2];
  let x = 0;
  for (let i = 0; i < shipLengths.length; i++) {
    player.board.placeShip(x, 0, shipLengths[i], true);
    x += 1;
  }
}

function startGame() {
  const player1 = new Player();
  const player2 = new Player();

  placeDefaultShips(player1);
  placeDefaultShips(player2);

  let currentPlayer = player1;
  let opponent = player2;

  while (!opponent.board.areAllShipsSunk()) {
    const [x, y] = getRandomCoord();

    try {
      currentPlayer.attack(opponent, x, y);
      console.log(`Player attacked (${x}, ${y})`);
    } catch (err) {
      continue; // if coordinate already attacked, try again
    }

    if (opponent.board.areAllShipsSunk()) break;

    // switch turns
    [currentPlayer, opponent] = [opponent, currentPlayer];
  }

  console.log('Game Over!');
}

startGame();
