//strict mode

"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

//function

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
