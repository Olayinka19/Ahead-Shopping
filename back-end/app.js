
const cors = require('cors');
const express = require('express');
const app = express();

const itemController = require("./controllers/itemController");

// Configure express
app.use(cors());
app.use(express.json());


app.use("/items"
, itemController);

app.get("/", (req, res) => {
    res.send("Welcome to Ahead Shopping!")
})

app.get("/items", itemController);

app.get("*", (req, res) => {
    res.status(404).send("page not found")
  })

module.exports = app;