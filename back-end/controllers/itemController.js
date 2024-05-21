
const express = require("express");
const fruits = express.Router();


const {
    getAllFruits,
    getFruit,
    createFruit,
    deleteFruit,
    updateFruit
  } = require("../queries/fruits.js");
  const { checkName, validateUrl } = require("../validations/checkFruits.js")

  fruits.get("/", async (req, res) => {
    const allFruits = await getAllFruits();
    console.log(allFruits)
    if (allFruits) {
      res.status(200).json({payload: allFruits, success: true});
    } else {
      res.status(500).json({ error: "server error!" });
    }
  });
 
  
  
 
  fruits.get("/:id", async (req, res) => {
    const { id } = req.params;
    const fruit = await getFruit(id);
    if (fruit.id) {
      res.json({payload: fruit, success: true});
    } else {
      res.status(404).json({ payload: "not found", success: false, error: "fruit not found" });
    }
  });

  fruits.post("/", checkName, validateUrl, async (req, res) => {
    try {
      const fruit = await createFruit(req.body);
      res.json(fruit)
    } catch (error) {
      return error;
    }
  });
  

  fruits.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedFruit = await deleteFruit(id);
    if (deletedFruit.id) {
      res.json({payload: deleteFruit,success: true});
    } else {
      res.status(404).json({payload: "not found", success:false, error:"fruit not found"})
    }
  });
  

  fruits.put("/:id", validateUrl, checkName, async (req, res) => {
    const { id } = req.params;
  
    const updatedFruit = await updateFruit(req.body, id);
    if (updatedFruit.id) {
      res.json(updatedFruit);
    } else {
      res.status(404).json({payload: "not found", success:false, error:"fruit not found"})
    }
  })
  

  module.exports = fruits;