const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Cotent-Type": "text/html" });
  const myReadStream = fs.createReadStream(__dirname + "/index.html");

  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
