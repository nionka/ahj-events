import GamePlay from './GamePlay';

const gameplay = new GamePlay();
gameplay.bindToDom(document.getElementById('game-container'));
gameplay.init();

setInterval(() => {
  gameplay.addGoblinRandom();
},
1000);
