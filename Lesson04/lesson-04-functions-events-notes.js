//functiona allow users to run blocks of codes. use Functiond declartion function functionName() {} no semicolons needed after functions. Good for running code over and over again. Need to define fxn and then CALL it. Anymous functions do exist.

//Simple adder function

let x = 24;
let y = 12;
let result = 0;

function adder () {
  result = x + y;
}

adder ();
console.log(result);
//omitting the fxn would release a result of zero.

//arguments let the function know that some values are being passed to it. The parameters are the values we send to the function when we call it.

//STRUCTURE
function functionName(arguments) {
  //code here
}
 //let function know that arguments are being passed to it

 functionName(parameters);
 //values that we sent to the function when we call it

 //SAME ADDER

 const x = 25;
 const y = 3;
 let result = 0;

 function muliplier(firstNumber, secondNumber){
   result = firstNumber * secondNumber; //changing the reference to the variable for the use inside of the function, so 25 is x and y is 3 and once you're inside the fxn, these numbers a \re mapped to the numbers that we call in the parameters.
 }

 multiplier(x,y);
 console.log(result);
 //75 -- so how it's working is that it's 3 times 25, which is 75.

 //SCOPE
 //so any variable declared in a function block won't be available outside of it. It has to be declared outside of the function to be available for use outside.

 //SIMPLE ADDER

 let result = 0;

 function adder(x, y) {
   result = x + y;
 }

 adder (42, 19);
 console.log(result);

 //function always return something

 //function can CALL functions
 let area;

 function volumeCalculator(length, width, height) {
   volume = length *height * width;
   return volume;
 }
 console.log(volumeCalculator(2,8,2));

 //function to calculate the distance a car runs during a race

 const lapLength = 5;
 const laps = 23;

 function raceLength(x, y) {
   return x * y; //what happens when the function is called
 }

 console.log (raceLength(lapLength, laps));
//115 This works because we're returning a value

//IF we declared a variable and then updated it inside the function,
const lapLength = 5;
const laps = 23;
let raceLength = 0; //VARIABLE added

function raceLength(x, y) {
  raceLength = x * y; //what happens when the function is called
}

console.log (raceLength(lapLength, laps));

//Nothing hapens because raceLength inside fxn isn't returning anything

//functions; they use all three, the PARAMETERS are values passed into the function, a RETURN ‘returns’ a result of code, and the CURLY BRACES wrap code blocks.

const lapLength = 5;
const laps = 23;
let raceLength = 0; //VARIABLE added

function raceLength(x, y) {
  return x * y; //NOW, value is being sent as the result of this fxn call, and then putting that inside of the () of the console.log
}

console.log (raceLength(lapLength, laps));

//CALLBACKS
//can pass a functio into another function as an argument and have somethinh happen. STANDARD INTERVIEW QUESTION

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name');
  callback(name);
}



let x = 2;

function doubler(value) {
return x = value * 2;
}


function powerOf(value) {
return x = doubler(value) * value;
}

doubler(x);
powerOf(x);

console.log(x);

//32 because X starts off as two, then 2 is passed to doubler, which returns 4. Now, 4 is passed to powerOf and then that same 4 is passed to double, which returns 8. The value to the right of the * sign is still 4 and thus, 8 times 4 is 32


/*Two built in JavaScript functions that we can use: Prompt and Alert. These are standard.
Prompt opens a window and asks for user input and we assign that value to a variable and stores it as a string.

let num = prompt("Pick a number:");

Alert pops open a window with info for user. We can pass info to alert and can use strings, arrays or JavaScript. It will only take one input. MOre than one, we'll need an array or show more than one alert.

alert(variable);

*/

//Prompt

let input = prompt('Enter a number');
let numberToAdd = 2;
let result = 0;

result = numberToAdd + input;

alert(result);

/*
When this file loads, it will call the prompt and ask for number, so user will enter number, that number goes in input and then it'll take result and add in number to add and the input we have and the result will be alerted


SO, with this the answer is 25 because JavaScript wants to concat the string here (it'll do this if it sees strings) from the inputed 5 (which is a string). Remember that input is a string. So, we need a type conversion where we turn one data type into aanother, so a string to a number in this case.
*/


//SOOOO
let input = prompt('Enter a number');
let numberToAdd = 2;
let result = 0;

result = numberToAdd + Number (input);//takes input string and change it into a number. REMEMBER that number only works on number so if you put a word, you're not gonna get a result!

alert(result);

//EVENT HANDLERS

/*Event handlers are how users interact with elements on a website. Gonna use click events, keyup (button goes up), keydown, scroll (mouse or track pad), submit (like a form)

To Use an Event HANDLERS
pass it into html elements as an attribute

<element event="some JavaScript">

We then put the JavaScript inside of DOUBLE QUOTES!
*/

//On Click Handler (an Event Handler)
//Go to index.html in this folder
