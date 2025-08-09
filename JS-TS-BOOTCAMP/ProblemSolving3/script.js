// 1. Count Letters in a Word

function countLetters(word) {
  return word.length;
}

console.log("Number of letters:", countLetters("javascript"));


// 2. If/Else - Check if Number is Big

function checkIfBig(num) {
  if (num > 100) {
    console.log("Big");
  } else {
    console.log("Small");
  }
}

checkIfBig(150); 
checkIfBig(50);  

// 3. Loops - Count from 1 to 5

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// 4. Remove Last Item from Array

let colors = ["red", "green", "blue"];
colors.pop();
console.log("Updated array:", colors);
