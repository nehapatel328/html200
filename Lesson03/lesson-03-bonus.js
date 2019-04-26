let arr = [['Heart', 'Diamond', 'Club', 'Spade'], ['Ace', 'King', 'Queen', 'Jack','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine' ]];
console.log(arr[0]);
//["Heart", "Diamond", "Club", "Spade"]

console.log(arr[1]);
//["Ace", "King", "Queen", "Jack", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

console.log(arr[0][1]);
//"Diamond"

console.log(arr[1][1]);
//"King"

console.log(arr.length);
//2

console.log(arr[0].length);
//4

console.log(arr[1].length);
//13

//Check that arr is working

for (let i = 0; i < arr.length; i++) {
  console.log(arr);

  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

/* Check that array within array is working
[["Heart", "Diamond", "Club", "Spade"], ["Ace", "King", "Queen", "Jack", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]]
"Heart"
"Diamond"
"Club"
"Spade"

[["Heart", "Diamond", "Club", "Spade"], ["Ace", "King", "Queen", "Jack", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]]
"Ace"
"King"
"Queen"
"Jack"
"One"
"Two"
"Three"
"Four"
"Five"
"Six"
"Seven"
"Eight"
"Nine"
*/
