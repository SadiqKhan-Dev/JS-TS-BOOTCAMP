// 1. Variables & Data Types What is the difference between var, let, and const?

let myName = "Sadiq khan" 
let age = 25  
let isUserOnline = true 
let address = undefined 
let salary = null 
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isUserOnline);
console.log(typeof address);
console.log(typeof salary);


// 2. Operators What is the difference between == and ===?
// How do increment (++) and decrement (--) operators work?

// == aur === may difference

console.log(5 == "5");
console.log(3 === "3");

// ++ aur -- may difference

let x = 5;
x++; 
x--; 

// 3.Functions Write a function that adds two numbers.
// What are parameters and return values in functions?
// Write an example of an arrow function.

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(3, 5)); 


// arrow function

const multiply = (x, y) => {
    return x * y;
};

console.log(multiply(3, 5));



// 5.Objects Create an object with name, age, and city properties.
// How do you access a specific value from an object?

const person = {
    name: "Sadiq khan",
    age: 25,
    city: "Lahore"
};

// How do you access a specific value from an object?
console.log(person.name);
console.log(person.age);
console.log(person.city);