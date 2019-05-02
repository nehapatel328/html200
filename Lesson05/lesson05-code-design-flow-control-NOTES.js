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

//SWITCH Statements
//good for single values against multiple and diff cases

//this code takes a variable (dog breed) and compares it to a few diff strings. depending on if the boolean expression returns true...we'll print out a diff message.
const myDogBreed = 'labradoodle';

function getSheddingAmount(breed {
  if (breed === 'golden retriever') {
    return 'lots of shedding';
  } else if (breed === 'labradoodle') {
    return 'minmial shedding';
  } else if (breed === 'portuguese water dog') {
    return 'no shedding';
  } else {
    return 'not found';
  }
}

console.log (
  getSheddingAmount(myDogBreed)
); //white this works, it would be tedious to add more statements, like 10 or 20. SOO A SWTICH STATEMENT IS USED INSTEAD

//SWITCH STATEMENTS
//has a switch keyword and then a value in (); the value in () is then compared to one or more cases defined in the block of the switch statement. each case is defined by usng case keyword, followed by the value that we wanne compare agaisnt. each case blcok run a set of statements and end with the BREAK keyword in order to end the block. if none of cases match, we can run a default case.

const myDogBreed = 'labradoodle';

function getSheddingAmount(breed {
  switch (breed) {
    case 'beagle': // fall through case. will run with golden retriever. use break if you wanna run separate
    case 'golden retriever': {
      return 'lots of shedding';
      break; //ends the block
    }

    case 'portuguese water dog': {
      return 'no shedding';
      break;
    }
    default: { //will run if there's no match
      return 'not found';
    }

  }
}
console.log (
  getSheddingAmount(myDogBreed)
);
//switch statements is good when dealing with 3 to 4 blocks or MORE. if/else better for 1 or 2.

//ERROR HANDLING WITH TRY-CATCH-FINALLY blocks
//try is the rope and catch is the net.

const dogToParse = '{"dog": "Husky", "name": "Dubs}'; //missing a double quote so'll you'll get an error

const parsedDog = JSON.parse(dogToParse);

console.log(dog.name);
console.log('Program finished');

//SOO USE A TRY/CATCH BLOCK

try {
  const dogToParse = '{"dog": "Husky", "name": "Dubs}'; //missing a double quote so'll you'll get an error
  const parsedDog = JSON.parse(dogToParse);
  console.log(dog.name);
} catch(error) {
  console.log('invalid dog object');
  throw error; //ensures that error shows up in console
} finally { //cleanup code to run regardless if an error is run. add a finally block to try/catch. finally is great for a block where cleanup needs to occur, such as closing a file or alerting the user of what happened.
  console.log('Program finished');
}

//only use when you think an error might occur. 
