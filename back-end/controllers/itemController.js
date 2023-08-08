
const express = require("express");
const items = express.Router();


const {
    getAllItems,
    getItem,
    createItem,
    deleteItem,
    updateItem
  } = require("../queries/items.js");
  const { checkName, validateUrl } = require("../validations/checkItems.js")

  items.get("/", async (req, res) => {
    const allItems = await getAllItems();
    console.log(allItems)
    if (allItems) {
      res.status(200).json({payload: allItems, success: true});
    } else {
      res.status(500).json({ error: "server error!" });
    }
  });
 
  
  
 
  items.get("/:id", async (req, res) => {
    const { id } = req.params;
    const item = await getItem(id);
    if (item.id) {
      res.json({payload: item, success: true});
    } else {
      res.status(404).json({ payload: "not found", success: false, error: "item not found" });
    }
  });

  items.post("/", checkName, validateUrl, async (req, res) => {
    try {
      const item = await createItem(req.body);
      res.json(item)
    } catch (error) {
      return error;
    }
  });
  

  items.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedItem = await deleteItem(id);
    if (deletedItem.id) {
      res.json({payload: deleteItem,success: true});
    } else {
      res.status(404).json({payload: "not found", success:false, error:"item not found"})
    }
  });
  

  items.put("/:id", validateUrl, checkName, async (req, res) => {
    const { id } = req.params;
  
    const updatedItem = await updateItem(req.body, id);
    if (updatedItem.id) {
      res.json(updatedItem);
    } else {
      res.status(404).json({payload: "not found", success:false, error:"item not found"})
    }
  })
  

  module.exports = items;