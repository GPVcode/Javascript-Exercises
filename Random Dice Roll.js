// Random Number Generation:
var n = Math.random(); // generates number from 0 - 0.999...
// Simulate a dice roll
n = n * 6; // scales the range to 0 - 5.999...
// get rid of 0 as outcome of random number generator. Use Math.floor to get only whole numbers (1-6) as outcomes
n = Math.floor(n) + 1; //add 1 to get a range from 1-6  (takes the possibility of getting a zero as random outcome)
console.log(n);
//This is called a pseudo random number generator
