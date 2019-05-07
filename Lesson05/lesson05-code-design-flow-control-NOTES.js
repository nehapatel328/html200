//CONDITIONAL STATEMENTS: TERNARY STATEMENTS; IF/ELSE STATEMENTS

//if/else Statements: have an if keyword, a boolean expression, and a block of code. if boolean is true, then block executes, if false, block is skipped. alternative block if expression is false via an ELSE BLOCK.
//example: Choosing a restaurant, depending on if a coin flip produces heads or tails---If we need to have two restaurants and we’re trying to decide which one to go to, we’ll need to check the coin value and go to the first restaurant if heads, else the second restaurant.


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
    return; //this renders the else clauses unecessary
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
  puppy = true;
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
); //while this works, it would be tedious to add more statements, like 10 or 20. SOO A SWTICH STATEMENT IS USED INSTEAD

//SWITCH STATEMENTS
//has a switch keyword and then a value in (); the value in () is then compared to one or more cases defined in the block of the switch statement. each case is defined by usng case keyword, followed by the value that we wanne compare agaisnt. each case blcok run a set of statements and end with the BREAK keyword in order to end the block. if none of cases match, we can run a default case.

//example:  Displaying a translated message on the screen based on the language you select? Let's say there are 10 language choices.​--Switch statements are best for situations that compare one variable to many values. While if/else statements could be used, it’s more concise and readable to use a switch statement.



const myDogBreed = 'labradoodle';

function getSheddingAmount(breed) {
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


//OBJECTS
//functions are objects. used as a way to better stxr and org the primitives we've been using
//objects are containers used for strings, booleans, and other objects.

const = dog {}; //empty object so add some values, which can then be added and stored in the object as key value pairs.

const dog = {
  name: 'Fido'
};//key is name; and the valude is 'Fido' (the string/primitive). So now our object has one value that can be obtained by referencing it by key. To access this value, we can use two diff methods: DOT NOTATION that's the most common;OR BRACKET NOTATION

//Object properties are accessed via dot notation or bracket notation via a string/variable.


const dog = {
  name: 'Fido'
};
console.log(dog.name); //DOT notation inside (). It's the variable name followed by dot and then the key name in order to obtain the value. dog[breed] is not correct because breed is never defined with the string ‘breed’.

//SECOND is BRACKET NOTATION
//more useful if we're accessing the key using a variable
const dog = {
  name: 'Fido'
};
console.log(dog['name']); //string name into the bracket, dog[name] is not correct because name is never defined with the string 'name'.
//Fido

//NOW let's store key into a variable

const dog = {
  name: 'Fido'
};

const key = 'name';
console.log(dog.name);
//Fido

//we can store additional values into this object as long as the key value pairs are comma separated.

const dog = {
  name: 'Fido',
  age: 4,
  speak: function('Woof!');
};
dog.speak();
//Woof!

//If we need to access a value by key inside this object, such as inside the function we created, I want to print out this name, we can use a ref to the object itself. The keyword "this" will refer to the object that we need to use inside a function.  For ex, we can access the dog's name insdie of this fxn by using this.name
const dog = {
  name: 'Fido',
  age: 4,
  speak: function();
    console.log(this.name); // will only work inside this fxn inside this object
};
dog.speak();

//Fido

//can use objects to store other objects. Let's add owner's first and last name to this object.

const dog = {
  name: 'Fido',
  age: 4,
  speak: function();
    console.log(this.name);
  },
  owner: {
    firstName: 'Mary',
    lastName: 'Smith'
  }
};

dog.speak();

//objects are essential building blocks of javascript programs. They provide a container to not only organize but also encapsualate data into independent, modular unit. Whenever you start working with pieces of data that are tightly related to one another, think about putting that data into an object.

//run a program over and over WHILE something is false. The best way to do this is to use a while loop. A while loops is

let input = false;
while (true) { //while a condition is true, run this code
  //code that's gonna run over and over while true
}

let quite = false; //variable quite because we want user to be able to quite the program
let balance = 1000;

while (input === false) {

  let input = prompt ('Enter your command'); //this will check for our input and if it's some value, then do some coding

  if (input === 'quit') {
    //type in quit to end the program to stop that while loop. so everything depends on what you enter

    quit = true; //only quits when variable false above is true
  } else if (input === "W") //withdrawal...but we need to keep trakc of balance, so put it up under let quit so you can access balance (outside of loop) so so the loop doesn't reset everytime. It'll go through flow control and the balance will be adjusted.
  //code

  quit = true; //user needs to flip switch

  }
}

console.log('Program End') //proof of program quiting
