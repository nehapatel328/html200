//functions; they use all three, the PARAMETERS are values passed into the function, a RETURN ‘returns’ a result of code, and the CURLY BRACES wrap code blocks.

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
