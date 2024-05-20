//strict mode

"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

//function
/*
function logger() {
  console.log("My name is Jonas");
}

//calling / running/ invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
//Arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstname) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Prathamesh"));
console.log(yearsUntilRetirement(1995, "Rahul"));
*/

//functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const OrangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} apples and ${OrangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
