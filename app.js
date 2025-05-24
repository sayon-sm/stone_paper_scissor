// global constants to omit typos
const STONE = 'STONE';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';

const startGameBtn = document.getElementById('start-game-btn');
let stat = true;

function start() {
  stat ? console.log('GAME IS STARTING ...') : alert('GAME IS RUNNING !');
  stat = false;
  game();
}

function compChoice(n) {
  if (n < 0.3) return SCISSOR;
  else if (n > 0.6) return PAPER;
  else return STONE;
}

function game() {
  const player = prompt('Enter your choice! \nSTONE \nPAPER \nSCISSOR');
  const comp = compChoice(Math.random());
  console.log(player, comp);

  if (
    (player === STONE && comp === SCISSOR) ||
    (player === PAPER && comp === STONE) ||
    (player === SCISSOR && comp === PAPER)
  )
    alert('PLAYER WON !');
  else if (
    (player === STONE && comp === PAPER) ||
    (player === PAPER && comp === SCISSOR) ||
    (player === SCISSOR && comp === STONE)
  )
    alert('MOSNTER WON ! \nbetter luck next time');
  else alert("THAT'S A DRAW !");
}

startGameBtn.addEventListener('click', start);
