/*
// program for calculating sum of first N natural numbers

const num = Number(prompt("Enter a number "));
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum = sum + i;
}

console.log("The sum of first natural numbers until " + num + " is:" + sum);

*/

// Program for sum of the numbers in a given range

const start = parseInt(prompt("Enter the starting number: "));
const end = parseInt(prompt("Enter the last number: "));

let sum = 0;

for (i = start; i <= end; i++) {
  sum = sum + i;
}

console.log(sum);
