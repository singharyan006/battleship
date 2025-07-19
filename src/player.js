import AIPlayer from './ai.js';

export default function createPlayer(isComputer = false) {
  const movesMade = new Set();
  const computerAI = isComputer ? AIPlayer() : null;

  function hasAlreadyAttacked(coord) {
    return movesMade.has(coord.toString());
  }

  function makeMove(opponentGameboard, coord = null) {
    let target;

    if (isComputer) {
      do {
        target = computerAI.getMove();
      } while (hasAlreadyAttacked(target));
    } else {
      if (!coord) throw new Error("Player must provide a coordinate");
      if (hasAlreadyAttacked(coord)) throw new Error("Coordinate already attacked");
      target = coord;
    }

    movesMade.add(target.toString());
    opponentGameboard.receiveAttack(target[0], target[1]);
    return target;
  }

  function resetMoves() {
    movesMade.clear();
    if (computerAI) computerAI.reset();
  }

  return { isComputer, makeMove, hasAlreadyAttacked, resetMoves };
}
