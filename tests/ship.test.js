import Ship from '../src/ship.js';

describe('Ship', () => {
  test('has correct length', () => {
    const ship = Ship(3);
    expect(ship.length).toBe(3);
  });

  test('registers hits correctly', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('does not count hits beyond length', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    ship.hit(); // extra
    expect(ship.isSunk()).toBe(true);
  });
});
