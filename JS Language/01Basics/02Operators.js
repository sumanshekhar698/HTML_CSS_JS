var sellingPrice = 200;
var listingPrice = 800;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;// - / * + %
console.log("Discount percentage is: " + discountPercent);
console.log(76%5);

var result = sellingPrice > listingPrice;// > < >= <= == === != !==
console.log(result);
console.log(typeof result);


//Operators Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


console.log(3+4*5);//23

console.log((3+4)*5);//35
console.log(4*3**2);//36
console.log(4 ** 3 ** 2 );//4^9

