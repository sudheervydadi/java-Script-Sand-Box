// console.log(addDollerSign(100));

// We can use the functions in any order
console.log('addDollerSign above function call');
//Function Inisialtion

function addDollerSign(value) {
  return '$' + value;
}

console.log(addDollerSign(100));

// console.log(addPlusSign(200));
//Trying to use the functio expression above the function expression will cause error
//Cannot access 'addPlusSign' before initialization

//Funtion Expresion

// const addPlusSign = function someFunction(value) {
//   return '+' + value;
// };

// no need to write name of the function

const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));

//Function Expression should have semi colen at the end
//Normal functions does not require  semi collen

// Arrow Functions

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 6));

const doubleNumber = (a) => a * 2;

console.log(doubleNumber(10));

// Returning Object in Arrow Function

const createObj = () => {
  return { name: 'Sudheer Vydadi', age: 30 };
};

console.log(createObj());

const createObj1 = () => {
  return { name: 'Sudheer Vydadi' };
};

console.log(createObj1());

// To return an object without return block in arrow functions
const createObj2 = () => {
  name: 'Sudheer Vydadi';
  age: 25;
};
//Automatically pretier is adding semi collens in between object properties insted of comma

console.log(createObj2());
// It will give undefined

const createObj3 = () => ({
  name: 'Sudheer Vydadi',
  age: 25,
});

console.log(createObj3());

// IIFE Immediatelty Invoked Function Expression
// ()()
// nameless function and the scope is within that block only
// calling it with name inside the block will cause recursion

(function () {
  console.log('sudheer');
})();
//Pretiier adds semi colens automatically

//parameteried IIFE
(function (fullname) {
  console.log(`This is My my full name : ${fullname}`);
})('sudheer vydadi');

//named IIFE Hello function scope within itself so it will become resursion
// (function hello() {
//   console.log('Inside IIFE');
//   hello();
// })();
