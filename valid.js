/* to get user input
and to validate the same 
return player choice */

function playerChoice(choice) {
  while (!choice) {
    alert('Enter a valid option');
    choice = prompt(
      'Enter your choice! \n1. for STONE \n2. PAPER \n3. SCISSOR'
    );
  }
  if (choice === '1' || choice === 'stone' || choice === 'STONE')
    choice = STONE;
  else if (choice === '2' || choice === 'paper' || choice === 'PAPER')
    choice = PAPER;
  else if (choice === '3' || choice === 'scissor' || choice === 'SCISSOR')
    choice = SCISSOR;
  else {
    alert('Incorrct choice \nSTONE taken as default');
    choice = STONE;
  }
  return choice;
}
