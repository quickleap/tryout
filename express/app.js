const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("The url is " + req.url);
  //   res.send("This is the home page")
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  console.log("The url is " + req.url);
  //   res.send("This is the contact page");
  res.sendFile("./views/contact.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  console.log("The url is " + req.url);
  //   res.send("This is the contact page");
  res.sendFile("./views/about.html", { root: __dirname });
});

app.listen(3000);
