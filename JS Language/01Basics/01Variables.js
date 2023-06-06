// Strict Type - need to specify type, For JS use TypeScript

var fullName = "John Doe"; //JS uses Dynamic typing - no need to specify type
console.log(fullName);
// typeof operator- returns the type of the variable
console.log(typeof fullName); //

const id = 897; //constant | id is immutable and cannot be changed once assigned
console.log(typeof id); //number
// id = 123;//Error - cannot assign to constant variable

var isDev = false;
console.log(isDev);
console.log(typeof isDev);
isDev = true;
console.log(isDev);

let dozen = 12;
console.log(dozen);

var price = 12.5;
console.log(typeof price); //number

console.log("Full Name ==> " + fullName + "\nis Developer ==> " + isDev);
// String Formatting
console.log(`Full Name : ${fullName} \n Is A Dev : ${isDev}`); //backtick
