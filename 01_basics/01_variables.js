const accId = 101
let accEmail = "rudra@mail.com"
var accPassword = "Password"
accCity = "JDP"

// accId = 404 // not allowed 
accEmail = "new@mail.com"
accPassword = "1234"
accCity = "ghar"
let accState
/*
prefer not to use var because it has issues in block & functional scope
*/

console.log(accId);
console.table([accEmail, accPassword, accCity, accState])
