/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. */

//Prediction:True
const isDaytime:Boolean=true;
console.log("Is it Daytime?I predict true.");
console.log(isDaytime);

console.log("Is 5+2==7?I predict true. ");
console.log(5+2==7);

const animal="lion";
console.log("Is animal==lion?I predict true.");
console.log(animal=="lion");

console.log("Is length of 'Tooba'==5?I predict true.");
console.log('Tooba'.length==5);

console.log("Is (4+1)==(2+3)?I predict true.");
console.log((4+1)==(2+3));

//Prediction:False
console.log("Is 'cat' != 'cat'? I predict False.");
console.log('cat' != 'cat');


console.log("Is winter the same as summer? I predict False.");
const isWinterSameAsSummer = false;
console.log(isWinterSameAsSummer);

console.log("Is 'apple' != 'apple'? I predict False.");
console.log('apple' != 'apple');

console.log("Is 8 > 10 or < 5? I predict False.");
console.log(8 > 10 || 8 < 5);

console.log("Is the Earth flat? I predict False.");
const isEarthFlat = false;
console.log(isEarthFlat);
