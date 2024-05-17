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


*/

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
