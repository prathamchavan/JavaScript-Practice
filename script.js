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

/*

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
*/

/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = (birthYeah, firstname) => {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return `already retired`;
  }
  return retirement;
};

console.log(yearsUntilRetirement(1999, "Prathamesh"));
*/

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/*

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

const avgDolhins = calcAverage(85, 54, 41);
console.log(avgDolhins);

const avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);

function checkWinner() {
  if (avgDolhins > avgKoalas) {
    return `Dolphin win (${avgDolhins} vs. ${avgKoalas})`;
  } else {
    return `"Koalas win (${avgKoalas} vs. ${avgDolhins}) `;
  }
}

console.log(checkWinner());
*/

/*
//Introduction to arrays

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]); //Micheal
console.log(friends[1]); //Steven
console.log(friends[2]); //Peter

console.log(friends.length);
console.log(friends[friends.length - 1]); //Peter
console.log(friends[friends.length - 2]); //Steven
console.log(friends[friends.length - 3]); //Micheal

friends[2] = "Jay";
console.log(friends);

const Jonas = ["Jonas", "Schmedtman", 2037 - 1991, "teaher", friends];
console.log(Jonas);
console.log(Jonas.length);

//Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0], calcAge(years[1]), calcAge(years[years.length - 1])),
];
console.log(ages);
 */

/*

//Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop();
const popped = friends.pop(); //last
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//this method checks weather element is in array or not
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

 */

/*
// coding challenge


Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

*/

/*
const calcTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * (15 / 100);
  } else {
    return bills * 0.5;
  }
};

// const calcTip = function (bill) {
//   return bills >= 50 && bills <= 300 ? bill * 0.15 : bill * 0.2;
// };

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

/* */
//Learning about objects

// object literal / object initializer

//creating empty JS object using {} and add four properties

// const person = {}; //create oject

// person.firstName = "Prathamesh"; //adding properties
// person.lastName = "Chavan";
// person.age = 50;
// person.eyecolor = "brown";

// console.log(person);

//creating an empty object using new object() and add 4 properties

// const person = new Object(); //creating object

// person.firstName = "Prathamesh"; //adding properties
// person.lastName = "Chavan";
// person.age = 50;
// person.eyecolor = "brown";

// console.log(person);

//////////////////// Object Constructor Functions ////////////////////

// function person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myFather = new person("Pravin", "Chavan", 52, "Brown");
// console.log(myFather["firstName"]);
// console.log(myFather.firstName);

/////////// object coding challenge //////////

/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.

*/

const John = {};
John.firstName = "John";
John.lastName = "Smith";
John.mass = 92;
John.height = 1.95;

const Mark = {};
Mark.firstName = "Mark";
Mark.lastName = "Miller";
Mark.mass = 78;
Mark.height = 1.69;

const calcBMI = function (mass, height) {
  return mass / height ** 2;
};

const JohnBMI = Math.round(calcBMI(John.mass, John.height));
const MarkBMI = Math.round(calcBMI(Mark.mass, Mark.height));

console.log(JohnBMI, MarkBMI);

if (MarkBMI > JohnBMI) {
  console.log(
    "Mark's BMI (" + MarkBMI + ") is higher than Mark's (" + JohnBMI + ")!"
  );
} else {
  console.log(
    "Mark's BMI (" + JohnBMI + ") is higher than Mark's (" + MarkBMI + ")!"
  );
}
