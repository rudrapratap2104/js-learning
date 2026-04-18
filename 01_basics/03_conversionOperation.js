let score = "13PR"

// console.log(typeof score);

// console.log(typeof (score));

 let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "13PR" => NaN
// "33" => 33
// "String" => NaN
// Null => 0
// Undefined => Undefined
// True => 1 ; False => 0

let isLoggedIn = " "
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true ; "anything inside qoutes even a space gives" => true
// 0 => false ; "" => 0