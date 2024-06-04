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

/*
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
*/

/*

//Program to find the greatest number between three numbers

const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));
const num3 = parseInt(prompt("Enter the third number:"));

if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the greatest number");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the greatest number");
} else if (num3 >= num1 && num3 >= num2) {
  console.log(num3 + " is the greatest number");
}

*/

//Program to find the leap year or not

const year = parseInt(prompt("Enter the leap year:"));
if (year % 400 == 0) {
  console.log("Leap year");
} else if (year % 4 == 0 && year % 100 != 0) {
  console.log("It is leap year");
} else {
  console.log("Not a leap year");
}
