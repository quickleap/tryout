var fs = require("fs");

//Synchronus way
// var readMe = fs.readFileSync("ReadMe.txt", "utf8");
// fs.writeFileSync("writeMe.txt", readMe);
// console.log(readMe);

//Asynchronus way
fs.readFile("ReadMe.txt", "utf8", function (err, data) {
  fs.writeFile("writeMe.txt", data);
});
