/*
// program for calculating sum of first N natural numbers

const num = Number(prompt("Enter a number "));
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum = sum + i;
}

console.log("The sum of first natural numbers until " + num + " is:" + sum);

*/

/*
// Program for sum of the numbers in a given range

const start = parseInt(prompt("Enter the starting number: "));
const end = parseInt(prompt("Enter the last number: "));

let sum = 0;

for (i = start; i <= end; i++) {
  sum = sum + i;
}

console.log(sum);
*/

//Program to find the gratest number between two numbers

const numOne = parseInt(prompt("Enter the first number: "));
const numTwo = parseInt(prompt("Enter the second number: "));

if (numOne > numTwo) {
  console.log(numOne + " is greatest number");
} else if (numTwo > numOne) {
  console.log(numTwo + " is the greatest number");
} else {
  console.log("Both values are equal");
}
