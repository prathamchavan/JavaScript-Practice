// program for calculating sum of first N natural numbers

const num = Number(prompt("Enter a number "));
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum = sum + i;
}

console.log("The sum of first natural numbers until " + num + " is:" + sum);
