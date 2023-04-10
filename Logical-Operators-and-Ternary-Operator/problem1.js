// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

// Age = Given date - Date of birth;
let date=2023 , dob=2000;
let age=date-dob;


 ((age>13) && (age<19)) ? console.log("Teenage") : ((29>age) && (age>20)) ? console.log("Twenties") : console.log("above Thirty");

//==>Twenties