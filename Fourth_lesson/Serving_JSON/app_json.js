const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/JSON" });
  var data = { name: "Josh", age: 20, job: "developer" };

  res.end(JSON.stringify(data));
});

server.listen(3001, "127.0.0.1");
console.log("Server is up");
