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
