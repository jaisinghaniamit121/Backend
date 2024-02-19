require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter Response");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Please Visit Learn With Amit</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example App listening on port ${process.env.PORT} `);
});
