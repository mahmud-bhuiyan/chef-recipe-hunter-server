const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 7000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("food-cravings!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find((n) => n.id === id);
  res.send(selectedChef);
});
app.listen(port, () => {
  console.log(`food-cravings listening on port: ${port}`);
});
