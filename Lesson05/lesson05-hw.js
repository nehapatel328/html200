let input = false;
let balance = 0;

while (input = true) {
  let quite = true; //variable quite because we want user to be able to quite the program
  const input = prompt ('What would you like to do? W (Withdraw), D (Deposit), B (View Balance)');
    switch () {
      case 'W': {
        return 'Withdraw';
        break;
      } //close case 'W'

      case 'D': {
        return 'Deposit';
        break;
      } //close 'D'

      case 'B': {
        return 'View Balance';
        break;
      } //close "B"

      case undefined:
        quit = true;
        break;

      default: { //will run if there's no match
        return 'Sorry, not found';
      } //close default
    } //close switch
    if (input === 'quit') {
      quit = true;
    } // close if statement
  }  // close prompt
} //close while loop


/*console.log('Program End') //proof of program quiting

let x = 0;
let

function processUserInput () {

  const name = prompt('What would you like to do? W (Withdraw), D (Deposit), B (View Balance)');

    switch () {
      case 'W': {
        return 'Withdraw';
        break;
      } //close case 'W'

      case 'D': {
        return 'Deposit';
        break;
      } //close 'D'

      case 'B': {
        return 'View Balance';
        break;
      } //close "B"

      case undefined:
        mustQuit = true;
        break;

      default: { //will run if there's no match
        return 'Sorry, not found';
      } //close default

    } //close switch

  while (true) {
    if (mustQuit) break;
  } // close while loop

}//close function
*/
