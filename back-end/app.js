
const cors = require('cors');
const express = require('express');
const app = express();

const fruitController = require("./controllers/fruitController");

// Configure express
app.use(cors());
app.use(express.json());


app.use("/fruits"
, fruitController);

app.get("/", (req, res) => {
    res.send("Welcome to OlaFolio Fruits!")
})
app.get('/reviews', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT r.*, i.name AS item_name, i.image_url AS item_image
      FROM reviews r
      JOIN items i ON r.item_id = i.id
    `);
    const reviews = result.rows;
    client.release();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews', error);
    res.status(500).send('Error fetching reviews');
  }
});


app.get("/fruits", fruitController);

app.get("*", (req, res) => {
    res.status(404).send("page not found")
  })

module.exports = app;