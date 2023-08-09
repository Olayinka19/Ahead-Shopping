
const db = require ("../db/dbConfig.js");


const getAllItems = async () => {
    try {
      const allItems = await db.any("SELECT * FROM items");
      return allItems;
    } catch (err) {
      return err;
    }
  };


  const getItem = async (id) => {
    try {
      const oneItem = await db.one("SELECT * FROM items WHERE id=$1", id);
      return oneItem;
    } catch (error) {
    
      return error;
    }
  };


  const createItem = async (item) => {
    const { name, price , quantity, image_url,  description , category } = item;
    try {
      const newItem = await db.one(
        "INSERT INTO items (name, price , quantity, image_url,  description) VALUES ($1, $2, $3, $4 , $5 , $6) RETURNING *",
        [name, price , quantity, image_url,  description , category]
      );
      return newItem;
    } catch (error) {
      return error;
    }
  };

  const deleteItem = async (id) => {
    try {
      const deletedItem = await db.one("DELETE FROM items WHERE id = $1 RETURNING *", id);
      return deletedItem;
    } catch (err) {
      return err;
    }
  };

 
  const updateItem = async (item, id) => {
    const { name, price , quantity, image_url,  description , category} = item;
    try {
      const updateditem = await db.one("UPDATE items SET name = $1, price = $2, quantity = $3, image_url = $4, description=$5 , category = $6 WHERE id = $7 RETURNING *",
      
      [name, price , quantity, image_url,  description, category, id]);
      return updateditem;
    } catch (err) {
      return err;
    }
  }


  module.exports = { 
    getAllItems, 
    getItem, 
    createItem, 
    deleteItem,
    updateItem
  };