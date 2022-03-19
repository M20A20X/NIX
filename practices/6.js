const numbers = [10, 20, 30, 50, 235, 3000];
const digitsRegex = /1|2|5/;

console.log(numbers.filter((number) => number.toString().match(digitsRegex))); // Output: [10, 20, 50, 235]