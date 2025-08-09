// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5 6 7 8 9 10


// 2. Print numbers from 10 to 1 (reverse)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Output: 10 9 8 7 6 5 4 3 2 1


// 3. Calculate the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100:", sum);
// Output: Sum from 1 to 100: 5050


// 4. Print all numbers that are multiples of 5 (from 5 to 50)
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}
// Output: 5 10 15 20 25 30 35 40 45 50


// 5. Print the square of numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
// Output: 1 4 9 16 25 36 49 64 81 100
