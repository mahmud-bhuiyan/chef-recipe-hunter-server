const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("food-cravings!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});