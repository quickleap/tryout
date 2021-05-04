//Learn about moudles and require
var counter = function (arr) {
  return "There are " + arr.length + " elements in the array.";
};

var adder = function (a, b) {
  return `The sum of the 2 numbers is ${a + b}`;
};

var pi = 3.145;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
//Or
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
