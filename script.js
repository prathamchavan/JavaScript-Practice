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

/*

//Program to find the leap year or not

const year = parseInt(prompt("Enter the leap year:"));
if (year % 400 == 0) {
  console.log("Leap year");
} else if (year % 4 == 0 && year % 100 != 0) {
  console.log("It is leap year");
} else {
  console.log("Not a leap year");
}
*/

/*

//Program to find the prime number

//take input from user
const number = parseInt(prompt("Enter the number:"));
let isPrime = true;

if (number === 1) {
  console.log("it is neither prime number nor a composite number");
}

//check if number is greater than 1
else if (number > 1) {
  //looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is prime number`);
  } else {
    console.log(`${number} is not prime number.`);
  }
}

// check if number is less than one
else {
  console.log("The number is not the prime number.");
}

*/

//Program for prime number in a given range

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

let start = parseInt(prompt("Enter the start of the range:"));
let end = parseInt(prompt("Enter the end of the range:"));

if (isNaN(start) || isNaN(end)) {
  console.log("Please enter valid numbers.");
} else if (start > end) {
  console.log("Start should be less than or equal to End.");
} else {
  let primeNumbers = findPrimesInRange(start, end);
  console.log(
    `Prime numbers between ${start} and ${end} are: ${primeNumbers.join(", ")}`
  );
}
