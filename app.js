const startGameBtn = document.getElementById('start-game-btn');
game = true;

function start() {
  game ? console.log('GAME IS STARTING ...') : alert('GAME IS RUNNING !');
  game = false;
}

startGameBtn.addEventListener('click', start);
