//Set timeout
// setTimeout(() => {
//   console.log("Set time out function.");
//   console.log("Runs after 3 seconds");
// }, 3000);

//Set interval.
//setInterval() method calls a function or evaluates an expression at specified intervals.
// var time = 0;
// var timer = setInterval(function () {
//   time += 2;
//   console.log("The sum of time: " + time);

//   if (time >= 10) {
//     clearInterval(timer);
//   }
// }, 2000);

//Learning about modules and require
const stuff = require("./count");

console.log(stuff.counter(["Shaun", "ryu", "luke"]));
console.log(stuff.adder(5, 7));
console.log(stuff.adder(stuff.pi, 9));
