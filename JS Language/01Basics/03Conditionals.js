var temp;
temp = 23;

if (temp <= 20) {
  //if else if ladder
  console.log("It's cold outside");
} else if (temp > 20 && temp <= 30) {
  console.log("It's moderate outside");
} else {
  console.log("It's hot outside");
}

var email = true;
var facebook = false;
var google = false;
var authenticated = false;

if (email || facebook || google) {
  //logical OR operator
  console.log("Login Success");
  authenticated = true;
} else console.log("Login Failed");

//transaction   of Bank
var bankCreds = true;
var fingerPrintAuth = true;
var otp = false;

if (bankCreds && fingerPrintAuth && otp) {
  //logical AND operator
  console.log("Transaction Success");
} else {
  console.log("Transaction Failed");
}

//Ternary Operator
authenticated ? console.log("Welcome User") : console.log("Login Failed");

var result = false;
var condition = "result != false"; //result ==  false//
console.log(typeof condition); //string
var conditionBool = result != false; //result == false  -> true -> !true -> false
console.log(typeof conditionBool); //boolean
console.log(conditionBool); //false

// if (result) {
// if (condition) {
if (eval(condition)) {
  console.log("Result is out");
} else {
  console.log("Result is not out");
}

var num = "3";
// if(num==3) // coercion in JS - type conversion
if (num === 3) console.log("true 3");
else console.log("false 3");

// falsy values
// undefined
// null
// 0
// ''
// NaN

condition = "";
if (condition) console.log("true");
else console.log("false");

// switch case
var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("You get access to create/delete");
    break;
  case "testprep":
    console.log("You get access to create/delete with permission");
    break;
  default:
    console.log("Trial user");
}
