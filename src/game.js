import Gameboard from './gameboard';
import Player from './player';

function Game() {
  const player1 = Player('Player 1');
  const player2 = Player('Player 2', true); // true = isComputer

  const board1 = Gameboard();
  const board2 = Gameboard();

  function playTurn(x, y) {
    const result = board2.receiveAttack(x, y);
    if (board2.allShipsSunk()) {
      return `${player1.name} wins!`;
    }

    // Computer makes a move
    const [cx, cy] = player2.generateRandomAttack();
    board1.receiveAttack(cx, cy);

    if (board1.allShipsSunk()) {
      return `${player2.name} wins!`;
    }

    return 'Continue';
  }

  return {
    board1,
    board2,
    playTurn,
  };
}

export default Game;
