const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  fs.readFile(__dirname + "/" + "links.json", "utf-8", (err, data) => {
    console.log(data);
    res.json(data);
  });
});

app.listen(port, () => {
  console.log("listening port 3001");
});
