export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.cells = [];
    this.activeGoblin = null;
  }

  init() {
    this.drawBoard();
    // this.addGoblinRandom();
  }

  bindToDom(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  drawBoard() {
    const cell = '<div class="cell"></div>';

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      this.container.innerHTML += cell;
    }
    this.cells = Array.from(this.container.children);
  }

  deleteGoblin(index) {
    this.cells[index].classList.remove('goblin');
  }

  checkRandom() {
    let newPos = Math.floor(Math.random() * this.boardSize ** 2);

    while (newPos === this.activeGoblin) {
      newPos = Math.floor(Math.random() * this.boardSize ** 2);
    }
    return newPos;
  }

  addGoblinRandom() {
    if (this.activeGoblin !== null) {
      this.deleteGoblin(this.activeGoblin);
    }

    this.activeGoblin = this.checkRandom();
    this.cells[this.activeGoblin].classList.add('goblin');
  }
}
