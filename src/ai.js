// ai.js

const AIPlayer = () => {
  const previousMoves = new Set();

  function getRandomCoordinate() {
    let coord;
    do {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      coord = `${x},${y}`;
    } while (previousMoves.has(coord));

    previousMoves.add(coord);
    return coord.split(',').map(Number); // returns [x, y]
  }

  function resetMoves() {
    previousMoves.clear();
  }

  return {
    getMove: getRandomCoordinate,
    reset: resetMoves,
  };
};

export default AIPlayer;
