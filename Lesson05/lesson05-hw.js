let quit = false;
let balance = 1000;

while (quit === false) {
    let input = prompt('What would you like to do? W (Withdraw), D (Deposit), B (View Balance), Q (Quit)');

    if (input === 'Q') {
        quit = true;
    }

    else if (input === 'B') {
      alert('Your current balance is $' + Number(balance));

      if (balance <= 0){
        alert('Sorry, you have insufficient funds.')
      }//close if statement
    }//close else if

    else if (input === 'W') {
      let withdrawAmount = prompt('How much will you be withdrawing today?');
      balance -= Number(withdrawAmount);
      alert('Your current balance is $' + Number(balance));

      if (balance <= 0){
        alert('Sorry, you have insufficient funds.')
      }//close if statement
    } //close else if

    else if (input === 'D') {
      let depositAmount = prompt('How much will you be despositing today?');
      balance += Number(depositAmount);
      alert('Your current balance is $' + Number(balance))

      if (balance <= 0){
      alert('Sorry, you have insufficient funds.')
      }//close if statement
    }// close else if

    else if (input = undefined) {
      alert('Sorry, please try again');
    }//close else if
}

alert('Thanks for visiting!');
