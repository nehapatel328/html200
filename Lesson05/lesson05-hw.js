let balance = 1000;
let quite = false;

while (quit === false) {
  let input = prompt ('What would you like to do? W (Withdraw), D (Deposit), B (View Balance), quit');
    switch () {
      case 'B': {
        case input = 'B':
        let B = balance.toFixed;
        alert('Your balance is $' + balance.toFixed(2));
        if(newBalance <= 0){
          alert("Sorry, you have insufficient funds.")
        }//close if statement
        break;
      } //close "B"

      case 'W': {
          case input = 'W':
          let W = prompt ('How much will be withdrawing today?');
          newBalance = balance.toFixed + Number(W);
          return.alert('You are withdrawing $' - balance.toFixed(2));
          if(newBalance <= 0){
            alert("Sorry, you have insufficient funds.")
          }//close if statement
          break;
      } //close case 'W'

      case 'D': {
        case input = 'D':
        let D = prompt('How much will you be despositing today?');
        newBalance = balance.toFixed + Number(D);
        alert('Your balance is + balance.toFixed')
        if(newBalance <= 0){
          alert("Sorry, you have insufficient funds.")
        }//close if statement
        break;
      } //close 'D'

      case 'Q': {
        case input = 'Q';
        alert('You are logged out');
        break;
      } //close "B"

      case undefined:
        alert('Sorry, please try again');
        break;

      default: { //will run if there's no match
        alert('Sorry, not found');
      } //close default
    } //close switch

    if (input === 'Q') {
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
