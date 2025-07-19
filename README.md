# 🚢 Battle### Core Game Logic
- ⚓ **Ship Module**: Ship creation, hit detection, and sink status
- 🎯 **Gameboard**: 10x10 grid with ## 🐛 Known Issues

- Terminal interface may need refinement for better UX
- Ship placement validation could be enhanced

## 🚀 Future Enhancements

- [ ] Enhanced AI strategy (hunt/target mode after hits)
- [ ] Web-based GUI interface
- [ ] Multiplayer support
- [ ] Advanced ship placement validation
- [ ] Game statistics tracking
- [ ] Save/load game functionality
- [ ] AI difficulty levels and attack tracking
- 👤 **Player System**: Human and computer players with move validation
- 🤖 **AI Player**: Intelligent computer opponent with move tracking
- 🎮 **Game Controller**: Turn-based gameplay logic
- 💻 **Terminal Interface**: Command-line game runnerame

A classic Battleship game implemented in JavaScript using **Test-Driven Development (TDD)** methodology. Features a complete game engine with ship placement, attack tracking, player management, and terminal-based gameplay.

![Tests](https://img.shields.io/badge/tests-15%2F15%20passing-brightgreen)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![Jest](https://img.shields.io/badge/testing-Jest-red)
![TDD](https://img.shields.io/badge/methodology-TDD-blue)

## 🎮 Features

### Core Game Logic
- ⚓ **Ship Module**: Ship creation, hit detection, and sink status
- 🎯 **Gameboard**: 10x10 grid with ship placement and attack tracking
- � **Player System**: Human and computer players with move validation
- 🎮 **Game Controller**: Turn-based gameplay logic
- 💻 **Terminal Interface**: Command-line game runner

### Development Features
- ✅ **100% Test Coverage**: 15 comprehensive tests across 4 test suites
- 🔄 **TDD Methodology**: Built using test-driven development
- 📦 **ES Modules**: Modern JavaScript module system
- 🧪 **Jest Testing**: Comprehensive unit testing suite
- 🔧 **Babel Integration**: ESM compatibility for Jest

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/singharyan006/battleship.git
cd battleship

# Install dependencies
npm install

# Run tests
npm test

# Play the game (if terminal interface is complete)
npm start
```

## 🏗️ Project Structure

```
battleship/
├── src/
│   ├── ship.js          # Ship creation and management
│   ├── gameboard.js     # Game board logic and ship placement
│   ├── player.js        # Player factory (human/computer)
│   ├── ai.js           # AI player logic and move generation
│   ├── game.js          # Game controller and turn management
│   └── index.js         # Terminal game interface
├── tests/
│   ├── ship.test.js     # Ship module tests
│   ├── gameboard.test.js # Gameboard tests
│   ├── player.test.js   # Player system tests
│   └── game.test.js     # Game logic tests
├── .babelrc             # Babel configuration for ESM
├── jest.config.js       # Jest testing configuration
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🧪 Testing

This project was built using **Test-Driven Development (TDD)**, with comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
- **Ship Module**: 3 tests - Creation, hit detection, sink status
- **Gameboard Module**: 5 tests - Placement, attacks, win conditions
- **Player Module**: 4 tests - Human/computer moves, validation
- **Game Module**: 3 tests - Turn management, game flow

**Total: 15/15 tests passing ✅**

## 🎯 Game Rules

### Classic Battleship
1. Each player has a 10x10 grid
2. Ships are placed on the grid (various sizes)
3. Players take turns attacking coordinates
4. First player to sink all opponent ships wins

### Ship Types (Standard)
- Carrier (5 spaces)
- Battleship (4 spaces)
- Cruiser (3 spaces)
- Submarine (3 spaces)
- Destroyer (2 spaces)

## 🔧 Development

### Built With TDD
1. **Red**: Write failing test
2. **Green**: Write minimal code to pass
3. **Refactor**: Improve code while keeping tests green

### Git Workflow
- Feature branches for each module
- Comprehensive commit messages
- Merge to main after testing

### Recent Development
- ✅ Implemented core Ship module
- ✅ Built Gameboard with attack tracking
- ✅ Created Player system (human + AI)
- ✅ Added dedicated AI module with smart move tracking
- ✅ Added Game controller logic
- ✅ Built terminal interface
- ✅ Fixed coordinate parameter bug
- ✅ Enhanced computer player with move validation
- ✅ Achieved 100% test coverage

## � Known Issues

- Terminal interface may need refinement for better UX
- Ship placement validation could be enhanced
- Computer AI uses basic random strategy

## 🚀 Future Enhancements

- [ ] Enhanced AI strategy (hunt/target mode)
- [ ] Web-based GUI interface
- [ ] Multiplayer support
- [ ] Ship placement validation
- [ ] Game statistics tracking
- [ ] Save/load game functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Write tests for your feature (TDD approach)
4. Implement the feature
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'feat: add amazing feature'`)
7. Push to the branch (`git push origin feat/amazing-feature`)
8. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aryan Singh** - [@singharyan006](https://github.com/singharyan006)

## 🙏 Acknowledgments

- Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum
- Test-driven development methodology
- Jest testing framework
- Modern JavaScript ES Modules

---

*"The way to get started is to quit talking and begin doing." - Walt Disney*

🚢 **Happy Sailing!** ⚓