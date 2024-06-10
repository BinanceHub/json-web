const express = require("express");
const fs = require("fs");
const { url } = require("inspector");

const app = express();
const port = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/", (req, res) => {
  res.json({
    url: "https://google.com",
  });
});

app.listen(port, () => {
  console.log("listening port 3001");
});
