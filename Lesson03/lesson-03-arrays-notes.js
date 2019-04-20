let arr = [];
arr = ['one', 'two', 'three'];
console.log (arr[0])

const breakfastFoods = ['bacon', 'eggs', 'toast', 'coffee'];
for (let i = 0; i < breakfastFoods.length; i++) {
  console.log (breakfastFoods[i]);
}

console.log(breakfastFoods[1]);
console.log(breakfastFoods.length)

let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.push ('orange juice');
console.log(breakfastFoods);

let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.pop();
console.log(breakfastFoods);

let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.splice(1, 2);
console.log(breakfastFoods);

let breakfastFoods = ['bacon', 'eggs', 'coffee'];

const breakfastFoodsList = breakfastFoods.join(' ');

console.log(breakfastFoods);

const emailAddress = 'james@james.com';

const emailAr = emailAddress.split('@');

console.log (emailArr);

let breakfastFoods = ['bacon', 'eggs', 'coffee'];

breakfastFoods.forEach(function(food) {
  console.log(food);

})

let arr = [['1', '2'], ['a', 'b']];
console.log(arr[0][1]);

const menu = [['bacon', 'eggs', 'waffles'], ['salad', 'ham']];
console.log(menu[1]);

for (let i = 0; i < menu.length; i++) {
  console.log(menu);

  for (let j = 0; j < menu[i].length; j++) {
    console.log(menu[i][j]);
  }
}
