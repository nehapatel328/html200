
let number = prompt ('Enter a number') //alert to screen

function squareRoot (numberToSquare) { //callback function with a name of 'square'
  numberToSquare = Math.sqrt(numberToSquare); //returns square root of a number with a variable of 'numberToSquare' or what the user inputs
  alert(numberToSquare); //print alert to the screen with the user input squared
}

squareRoot(number);
