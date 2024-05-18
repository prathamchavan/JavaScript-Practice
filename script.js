//let js = "amazing";
//console.log(40 + 8 + 23 - 10);

/*console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);


let javascriptIsFun = false;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 60);
console.log(typeof "Prathamesh");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;
console.log(age);

const birth = 1999; //const can not be modified

var job = "programmer";
job = "teacher";

lastName = "chavan";
console.log(lastName);


//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSearch = now - 2018;
console.log(ageJonas, ageSearch);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Cavan";
console.log(firstName + " " + lastName);

//assignment operator

let x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10
console.log(x);
x *= 10; // x = x * 10
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSearch); // >, <, >=, <=

console.log(ageSearch >= 18);

const isFullAge = ageSearch >= 18;

console.log(now - 1991 > now - 2018);



//operator precedence
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log((a = b = 5));
// Expected output: 5
Operator precedence will be handled recursively. For example, consider this expression:

JS
Copy to Clipboard
1 + 2 ** 3 * 4 / 5 >> 6
First, we group operators with different precedence by decreasing levels of precedence.

The ** operator has the highest precedence, so it's grouped first.
Looking around the ** expression, it has * on the right and + on the left. * has higher precedence, so it's grouped first. * and / have the same precedence, so we group them together for now.
Looking around the / expression grouped in 2, because + has higher precedence than >>, the former is grouped.
JS
Copy to Clipboard
   (1 + ( (2 ** 3) * 4 / 5) ) >> 6
// │    │ └─ 1. ─┘        │ │
// │    └────── 2. ───────┘ │
// └────────── 3. ──────────┘
Within the group, because they are both left-associative, the left operand would be grouped.

JS
Copy to Clipboard
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘




const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.88;
const johnmass = 95;

markBMI = markMass / markHeight ** 2;
johnBMI = (johnmass / johnHeight) * johnHeight;

markHigherBMI = Boolean(markBMI > johnBMI);

console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

*/

/*There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins wins the trophty");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Kolas win the trophy");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both wins the trophy");
} else {
  console.log("No one wins the trophy");
}
*/

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430

*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
