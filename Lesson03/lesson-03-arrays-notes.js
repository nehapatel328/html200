let arr = [];
arr = ['one', 'two', 'three'];
console.log (arr[0])

/*
"salad"
"ham"
"one"
*/

const breakfastFoods = ['bacon', 'eggs', 'toast', 'coffee'];
for (let i = 0; i < breakfastFoods.length; i++) {
  console.log (breakfastFoods[i]);
}

/*
"2"
["salad", "ham"]
[["bacon", "eggs", "waffles"], ["salad", "ham"]]
"bacon"
"eggs"
"waffles"
[["bacon", "eggs", "waffles"], ["salad", "ham"]]
"salad"
"ham"
"one"
"bacon"
"eggs"
"toast"
"coffee"
*/

console.log(breakfastFoods[1]);
console.log(breakfastFoods.length)
/*
"eggs"
*/

let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.push ('orange juice');
console.log(breakfastFoods);
// ["bacon", "eggs", "coffee", "orange juice"]


let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.pop();
console.log(breakfastFoods);
// ["bacon", "eggs"]


let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.splice(1, 2);
console.log(breakfastFoods);
//["bacon"]


let breakfastFoods = ['bacon', 'eggs', 'coffee'];

const breakfastFoodsList = breakfastFoods.join(' ');

console.log(breakfastFoods);
//["bacon", "eggs", "coffee"]

const emailAddress = 'james@james.com';

const emailArr = emailAddress.split('@');

console.log (emailArr);
//["james", "james.com"]


let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.forEach(function(food) {
  console.log(food);

})
/*
"bacon"
"eggs"
"coffee"
*/

let arr = [['1', '2'], ['a', 'b']];
console.log(arr[0][1]);
//"2"

const menu = [['bacon', 'eggs', 'waffles'], ['salad', 'ham']];
console.log(menu[1]);
//["salad", "ham"]

for (let i = 0; i < menu.length; i++) {
  console.log(menu);

  for (let j = 0; j < menu[i].length; j++) {
    console.log(menu[i][j]);
  }
}
/*
[["bacon", "eggs", "waffles"], ["salad", "ham"]]
"bacon"
"eggs"
"waffles"
[["bacon", "eggs", "waffles"], ["salad", "ham"]]
"salad"
"ham"
*/
