                // CHAPTER 5
// EXCERCISE 5.1
const maxValue = 5; 
const solution = Math.floor(Math.random() * maxValue) + 1;
let isCorrect = false;
while (!isCorrect) {
    let userGuess = prompt("Enter a number between 1 and ${maxValue}:");
    userGuess = parseInt(userGuess);
    if (userGuess === solution) {
        isCorrect = true;
        alert("Congratulations! You guessed the correct number!");
    } else {
        if (userGuess > solution) {
            alert("Too high! Try again.");
        } else {
            alert("Too low! Try again.");
        }
    }
}
// EXCERCISE 5.2
let counter = 0;
const step = 10; 
do {
    console.log("Counter:", counter);
    counter += step;
} while (counter < 100);

// EX 5.3
let myWork = [];
for (let i = 1; i <= 10; i++) {
    const status = i % 2 === 0 ? false : true;
    const lesson = {
        name: Lesson ${i},
        status: status
    };
    myWork.push(lesson);
}
console.log(myWork);

// EX 5.4
let myTable = [];
const numRows = 5;
const numColumns = 3;
let counter = 0;
for (let i = 0; i < numRows; i++) {
    let tempRow = [];
    for (let j = 0; j < numColumns; j++) {
        counter++;
        tempRow.push(counter);
    }
    myTable.push(tempRow);
}
console.table(myTable);

// EX 5.5
let grid = [];
const totalCells = 64;
let counter = 0;
let row = [];
for (let i = 0; i <= totalCells; i++) 
    if (counter % 8 === 0) {
        if (row !== undefined) {

            grid.push(row);
        }
        row = [];
    }
    counter++;
    row.push(counter);
    if (counter === 8) {
        grid.push(row);
    }
}
console.log(grid);

// EX 5.6
let myArray = [];
for (let x = 0; x < 10; x++) {
    myArray.push(x);
}
console.log("Array:", myArray);
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("Using for of loop:");
for (let value of myArray) {
    console.log(value);
}
// EX 5.7
const myObject = {
    item1: "apple",
    item2: "banana",
    item3: "orange"
  };
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(`${key}: ${myObject[key]}`);
    }
  }
  const myArray = ["apple", "banana", "orange"];
  for (const value of myArray) {
    console.log(value);
  }
//   EX 5.8
let output = '';
const skipNumber = 3;
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  output += `${i} `;
}
console.log(output);
output = ''; 

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  output += `${i} `;
}

console.log(output);
 
// CHAPTER PROJECT
const multiplicationTable = [];
const tableSize = 5;
for (let i = 1; i <= tableSize; i++) {
  const row = [];
  for (let j = 1; j <= tableSize; j++) {
    row.push(i * j);
  }
  multiplicationTable.push(row);
}
for (let i = 0; i < multiplicationTable.length; i++) {
  console.log(multiplicationTable[i].join('\t'));
}


                        // CHAPTER 6
// 6.1

function addNumbers(num1, num2) {
    return num1 + num2;
  }
  const firstNumber = 5;
  const secondNumber = 8;
  const result1 = addNumbers(firstNumber, secondNumber);
  console.log(`The result of adding ${firstNumber} and ${secondNumber} is: ${result1}`);
  const thirdNumber = 10;
  const fourthNumber = 3;
  
  const result2 = addNumbers(thirdNumber, fourthNumber);
  console.log(`The result of adding ${thirdNumber} and ${fourthNumber} is: ${result2}`);

//   6.2
const descriptiveWords = ["creative", "adventurous", "thoughtful", "energetic", "inspiring"];
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
  const randomWord = descriptiveWords[randomIndex];
  const userName = prompt("Please enter your name:");
  console.log(`Hello, ${userName}! You are a ${randomWord} person.`);
}
getRandomWord();

// 6.3
const num1 = 10;
const num2 = 5;
let operator = '+';
function calculateResult(value1, value2, operation) {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else {
    return value1 + value2;
  }
}
const result1 = calculateResult(num1, num2, operator);
console.log(`${num1} ${operator} ${num2} = ${result1}`);
operator = '-';
const result2 = calculateResult(num1, num2, operator);
console.log(`${num1} ${operator} ${num2} = ${result2}`);

// 6.4
const resultArray = [];
for (let i = 0; i < 10; i++) {
  const value1 = i * 5;
  const value2 = i * i;
  function calculateSum(param1, param2) {
    return param1 + param2;
  }
  const response = calculateSum(value1, value2);
  resultArray.push(response);
}
console.log(resultArray);

// 6.5
let value = 1000;
(function () {
  let value = 200;
  console.log("Inside IIFE 1:", value);
})();
let result = (function () {
  let value = 300;
  console.log("Inside IIFE 2:", value);
  return value;
})();
console.log("Result after IIFE 2:", result);
(function (newValue) {
  value = newValue;
  console.log("Inside Anonymous Function:", value);
})(400);
console.log("Final Value:", value);

// 6.6
function calculateFactorial(num) {
    if (num === 0) {
      return 1;
    } else {
      console.log(`Calculating factorial for ${num}`);
      return num * calculateFactorial(num - 1);
    }
  }
  const result = calculateFactorial(5);
  console.log(`Factorial Result: ${result}`);
  const newResult = calculateFactorial(3);
  console.log(`Factorial Result for a different number: ${newResult}`);

//   6.7
let start = 10;
function countdown(value) {
  console.log(value);
  if (value < 1) {
    return;
  }
  countdown(value - 1);
  if (value > 0) {
    countdown(value - 1);
  }
}
countdown(start);

// 6.8
const functionExpression = function (arg) {
    console.log(arg);
  };
  functionExpression("Hello from function expression!");
  function functionDeclaration(arg) {
    console.log(arg);
  }
  functionDeclaration("Hello from function declaration!");
  
//   CHAPTER PROJECT
// Project 1: Create a recursive function
function countUpRecursive(start) {
    if (start <= 10) {
        console.log(start);
        countUpRecursive(start + 1);
    }
}
// Invoke the recursive function with different start numbers
countUpRecursive(5); 
// Project 2: Set timeout order using arrow functions
const outputOne = () => console.log("One");
const outputTwo = () => console.log("Two");
const outputThree = () => {
    console.log("Three");
    outputOne();
    outputTwo();
};
// Project 3: Create a fourth function with setTimeout
const outputFour = () => {
    console.log("Four");
    setTimeout(() => outputOne(), 0);
    setTimeout(() => outputThree(), 0);
};
outputFour();
  