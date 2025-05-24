// global constants to omit typos
const STONE = 'STONE';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT = STONE;
let choice;

const startGameBtn = document.getElementById('start-game-btn');
let stat = true;

function compChoice(n) {
  if (n < 0.3) return SCISSOR;
  else if (n > 0.6) return PAPER;
  else return STONE;
}

function game() {
  console.log('GAME IS STARTING ...');
  choice = prompt('Enter your choice! \n1. for STONE \n2. PAPER \n3. SCISSOR');
  const player = playerChoice(choice);
  const comp = compChoice(Math.random());
  if (
    (player === STONE && comp === SCISSOR) ||
    (player === PAPER && comp === STONE) ||
    (player === SCISSOR && comp === PAPER)
  ) {
    alert('PLAYER WON !');
  } else if (
    (player === STONE && comp === PAPER) ||
    (player === PAPER && comp === SCISSOR) ||
    (player === SCISSOR && comp === STONE)
  ) {
    alert('MOSNTER WON ! \nbetter luck next time');
  } else {
    alert("THAT'S A DRAW !");
  }
  game();
}

startGameBtn.addEventListener('click', () => {
  stat ? game() : alert('GAME IS RUNNING !');
  stat = false;
});
