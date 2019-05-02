//CONDITIONAL STATEMENTS: TERNARY STATEMENTS; IF/ELSE STATEMENTS

//if/else Statements: have an if keyword, a boolean expression, and a block of code. if booldea is true, then block executes, if falst, block is skipped. alternative block if expression is false via an ELSE BLOCK.



const hairLengthInInches = 10;

if (hairLengthInches < 2){
  console.log ('short hair');
} else if (hairLengthInInches >= 2 && hairLengthInInches < 5) {
    console.log('medium hair');
  } else {
    console.log('long hair');
  }
//some patterns to be aware of. such as guard clauses and terniary statements.

function makeDogRollOver(dog){
  if(!dog) {
    console.log('You need to bring your dog first');
    return; //this render the else clauses unecessary
  } else {
    console.log('trainer: hello, you asked ' + dog + ', roll over!');
    console.log('trainer: Hey '+ dog + ', roll over!');

  console.log(dog + ':Woof! (rolls over)');
  console.log('Trainer: Good dog!');
  }
}

makeDogRollOver('Fido');

//TERNARY STATEMENTS are also a common way to express conditional statement. It uses the same idea as if/else but question mark used for if/else.

const dogAgeInHumanyear = 1;
let puppy;

if (dogAgeInHumanYears <= 2) {
  puppy= true;
} else {
  puppy = false;
}
//true -- is expected since dog age is 1 which is less than 2

const puppy = dogAgeInHumanyear <= 2 ? true : false;
//true -- so same as above but is more streamlined

console.log(puppy);

//ternary statements tend to clearer when dealing with small, one line conditional statements
