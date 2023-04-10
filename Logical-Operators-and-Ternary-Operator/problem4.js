// Problem 4: Given 3 numbers (all different values), print which is greatest

let a = 40, b = 70, c = 65;

((a > b) && ((a > c) || (b > c))) ? console.log("a is greatest") : ((b > a) && ((b > c) || (a > c))) ? console.log("b is greatest") : console.log("c is greatest");

// ~/Logical-Operators-and-Ternary-Operator$ node problem4.js
// c is greatest