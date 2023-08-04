/* The line `const db = require ("../db/dbConfig.js");` is importing the `dbConfig.js` file from the
`../db` directory and assigning it to the `db` constant. This allows the code to access and use the
functionality provided by the `dbConfig.js` module. */
const db = require ("../db/dbConfig.js");

/**
 * The function `getAllProducts` retrieves all products from a database table and returns them.
 * @returns The function `getAllProducts` returns either an array of all products from the database or
 * an error if there was an issue retrieving the products.
 */
const getAllProducts = async () => {
    try {
      const allProducts = await db.any("SELECT * FROM products");
      return allProducts;
    } catch (err) {
      return err;
    }
  };

/**
 * The `getProduct` function retrieves a single product from a database based on its ID.
 * @param id - The `id` parameter is the identifier of the product that you want to retrieve from the
 * database. It is used in the SQL query to filter the products table and retrieve the product with the
 * matching id.
 * @returns The `getProduct` function returns either the fetched product object or an error object.
 */
  const getProduct = async (id) => {
    try {
      const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
      return oneProduct;
    } catch (error) {
    
      return error;
    }
  };
/**
 * The function `createProduct` is an asynchronous function that inserts a new product into a database
 * table and returns the newly created product.
 * @param product - The `product` parameter is an object that contains the following properties:
 * @returns the newly created product if the insertion is successful. If there is an error, it will
 * return the error object.
 */

  const createProduct = async (product) => {
    const { items , descriptions } = product;
    try {
      const newProduct = await db.one(
        "INSERT INTO products (items , descriptions) VALUES ($1, $2, $3) RETURNING *",
        [items , descriptions]
      );
      return newProduct;
    } catch (error) {
      return error;
    }
  };

 /**
  * The function `deleteProduct` deletes a product from a database table based on its ID and returns
  * the deleted product.
  * @param id - The `id` parameter is the unique identifier of the product that needs to be deleted
  * from the database.
  * @returns The `deleteProduct` function is returning the deleted product if the deletion is
  * successful. If there is an error during the deletion process, the function will return the error.
  */
  const deleteProduct = async (id) => {
    try {
      const deletedProduct = await db.one("DELETE FROM products WHERE id = $1 RETURNING *", id);
      return deletedProduct;
    } catch (err) {
      return err;
    }
  };

 /**
  * The function `updateProduct` updates a product in a database by providing the new items and
  * descriptions values, and returns the updated product.
  * @param product - The `product` parameter is an object that contains the updated values for the
  * `items` and `descriptions` fields of a product.
  * @param id - The `id` parameter is the unique identifier of the product that needs to be updated in
  * the database.
  * @returns the updated product object if the update is successful. If there is an error, it will
  * return the error object.
  */
  const updateProduct = async (product, id) => {
    const { items , descriptions } = product;
    try {
      const updatedProduct = await db.one("UPDATE products SET items = $1, descriptions=$2 , WHERE id = $3 RETURNING *",
      
      [items, descriptions, id]);
      return updatedProduct;
    } catch (err) {
      return err;
    }
  }
/* The code `module.exports = { getAllProducts, getProduct, createProduct, deleteProduct, updateProduct
};` is exporting an object that contains all the functions defined in the file. This allows other
files or modules to import and use these functions. By exporting these functions, they become
accessible to other parts of the application that need to interact with the database and perform
CRUD operations on the products table. */

  module.exports = { 
    getAllProducts, 
    getProduct, 
    createProduct, 
    deleteProduct,
    updateProduct
  };