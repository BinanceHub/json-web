const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/" + "links.json", "utf-8", (err, data) => {
    console.log(data);
    res.json(data);
  });
});

app.listen(3001, () => {
  console.log("listening port 3001");
});
