// Problem 3: Given 2 numbers a and b print which is greater or "both equal".
let a=2,b=5;
if(a>b){
  console.log("a is greater");
}
else{
  if(a==b){
    console.log("both equal"); 
  }
  else{
    console.log("b is greater"); 
  }
}

// ===>
// ~/conditional-statements$ node problem3.js
// b is greater

let d=5,e=5;
if(d>e){
  console.log("d is greater");
}
else{
  if(d==e){
    console.log("both equal"); 
  }
  else{
    console.log("e is greater"); 
  }
}

// ===>
// ~/conditional-statements$ node problem3.js
// b is greater
// both equal