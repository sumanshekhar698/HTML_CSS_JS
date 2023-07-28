var fruits = ["mango","apple","banana","orange","grapes","lichi"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);
console.log(fruits.indexOf("banana"));
console.log(typeof fruits);



// STACK : LIFO (Last In First Out)  FILO (First In Last Out)

fruits.push("kiwi");
fruits.push("kiwi","passion fruit","dragon fruit");
console.log(fruits);


fruits.unshift("peaches");
console.log(fruits.pop());
console.log(fruits.pop());

console.log(fruits);


