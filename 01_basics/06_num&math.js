const score = 100;
// console.log(score);

const score1 = new Number(100.3456);
// console.log(score1);

// console.log(score1.toFixed(2));
// console.log(score1.toString());

const num1 = 100.3149;
// console.log(num1.toPrecision(4));

const num2 = 100000000;
// console.log(num2.toLocaleString('en-IN'));

// ----------------Math-------------------
// console.log(Math);
// console.log(Math.abs(-7));  
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
 // generates a random number between 10 and 20 (inclusive)
