let n1="gb";
let n2="db";
console.log(n1>n2); 
// ---> true
console.log(n2>n1); 
// ---> false
console.log(n2==n1); // ---> false
console.log(n2===n1);// ---> false
n2=n1;
console.log(n2==n1);// ---> true
console.log(n2===n1);// ---> true

let l1=5;
let l2="5";
console.log(l1==l2);// ---> true
console.log(l2===l1);// ---> false //datatypes are different