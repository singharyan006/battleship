export default function createPlayer(isComputer = false) {
  const movesMade = new Set();

  function getRandomCoord() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }

  function hasAlreadyAttacked(coord) {
    return movesMade.has(coord.toString());
  }

  function makeMove(opponentGameboard, coord = null) {
    let target;

    if (isComputer) {
      // Generate new random coord until it's unique
      do {
        target = getRandomCoord();
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

  return { isComputer, makeMove, hasAlreadyAttacked };
}
