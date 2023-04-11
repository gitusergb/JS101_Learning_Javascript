// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


checkuser=(username,password)=>{
  if(username===`admin`){
  if(password===1234){
    console.log("Login successful");
  }
  else{
    console.log("password incorrect");
  }
}
else{
  console.log("usarname incorrect");
}
}

let username="gb",password="rrr";
checkuser(username,password);
username=`admin`,password=1234;
checkuser(username,password);

// ==>
// ~/conditional-statements$ node problem4.js
// usarname incorrect
// Login successful