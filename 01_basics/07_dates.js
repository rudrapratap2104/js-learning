// date

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof(myDate));

// let myDate2 = new Date(2020, 11, 24, );
// let myDate2 = new Date(2020, 11, 24, 5, 33, 30);
// console.log(myDate2.toDateString());

let myDate2 = new Date("06-13-2026");
let myDate3 = new Date("2026-02-10");
// console.log(myDate2.toLocaleString());
// console.log(myDate3.toLocaleString());  

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myDate3.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', 
    { 
    month: 'long', 
    weekday: 'short',
    year: 'numeric',
    day: '2-digit'
 }));

 