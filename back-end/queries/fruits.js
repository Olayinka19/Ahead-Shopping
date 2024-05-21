
const db = require ("../db/dbConfig.js");


const getAllFruits = async () => {
    try {
      const allFruits = await db.any("SELECT * FROM fruits");
      return allFruits;
    } catch (err) {
      return err;
    }
  };


  const getFruit = async (id) => {
    try {
      const oneFruit = await db.one("SELECT * FROM fruits WHERE id=$1", id);
      return oneFruit;
    } catch (error) {
    
      return error;
    }
  };


  const createFruit = async (fruit) => {
    const { name, description, nutrition_info , image , recipes, health_benefit } = fruit;
    try {
      const newFruit = await db.one(
        "INSERT INTO fruits (name, description, nutrition_info , image , recipes, health_benefit) VALUES ($1, $2, $3, $4 , $5 , $6) RETURNING *",
        [name, description, nutrition_info , image , recipes, health_benefit]
      );
      return newFruit;
    } catch (error) {
      return error;
    }
  };

  const deleteFruit = async (id) => {
    try {
      const deletedFruit = await db.one("DELETE FROM fruits WHERE id = $1 RETURNING *", id);
      return deletedFruit;
    } catch (err) {
      return err;
    }
  };

 
  const updateFruit = async (fruit, id) => {
    const { name, description, nutrition_info , image , recipes, health_benefit} = fruit;
    try {
      const updatedFruit = await db.one("UPDATE fruits SET name = $1, price = $2, quantity = $3, image_url = $4, description=$5 , category = $6 WHERE id = $7 RETURNING *",
      
      [name, price , quantity, image_url,  description, category, id]);
      return updatedFruit;
    } catch (err) {
      return err;
    }
  }


  module.exports = { 
    getAllFruits, 
    getFruit, 
    createFruit, 
    deleteFruit,
    updateFruit
  };