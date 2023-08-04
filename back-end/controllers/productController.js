/* `const express = require("express");` is importing the Express module in JavaScript. Express is a
web application framework for Node.js that simplifies the process of building web applications and
APIs. By requiring the "express" module, we can use the functionalities provided by Express in our
code. */
const express = require("express");
const product = express.Router();
/* The code `const product = express.Router();` creates a new instance of an Express router. A router
is a middleware that allows us to define routes and handle HTTP requests for a specific part of the
application. */

const {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
  } = require("../queries/product.js");
  const { checkName, validateUrl } = require("../validations/checkProducts.js")

  
  /* The code `product.get("/", async (req, res) => { ... })` is defining a route handler for the GET
  request to the root URL ("/") of the product router. */
  product.get("/", async (req, res) => {
    const allProducts = await getAllProducts();
    if (allProducts[0]) {
    
      res.status(200).json(allProducts);
    } else {
      res.status(500).json({ error: "server error!" });
    }
  });
  
  /* The code `product.get("/:id", async (req, res) => { ... })` is defining a route handler for the
  GET request to the "/:id" URL of the product router. This means that when a GET request is made to
  a URL like "/products/123", where "123" is the value of the "id" parameter, this route handler
  will be executed. */
  product.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await getProduct(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
/* The code `product.post("/", checkName, validateUrl, async (req, res) => { ... })` is defining a
route handler for the POST request to the root URL ("/") of the product router. This means that when
a POST request is made to the "/products" URL, this route handler will be executed. */
  product.post("/", checkName, validateUrl, async (req, res) => {
    try {
      const product = await createProduct(req.body);
      res.json(product)
    } catch (error) {
      return error;
    }
  });
  
/* The code `product.delete("/:id", async (req, res) => { ... })` is defining a route handler for the
DELETE request to the "/:id" URL of the product router. This means that when a DELETE request is
made to a URL like "/products/123", where "123" is the value of the "id" parameter, this route
handler will be executed. */
  product.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct.id) {
      res.status(200).json(deletedProduct)
    } else {
      res.status(404).json("product not found!");
    }
  });
  
 /* The code `product.put("/:id", validateUrl, checkName, async (req, res) => { ... })` is defining a
 route handler for the PUT request to the "/:id" URL of the product router. This means that when a
 PUT request is made to a URL like "/products/123", where "123" is the value of the "id" parameter,
 this route handler will be executed. */
  product.put("/:id", validateUrl, checkName, async (req, res) => {
    const { id } = req.params;
  
    const updatedProduct = await updateProduct(req.body, id);
    if (updatedProduct.id) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({error: "product not updated for some reason...."});
    }
  })
  
/* The code `module.exports = product;` is exporting the `product` router as a module. This allows
other parts of the application to import and use the `product` router. When another file imports
this module using `require`, it will receive the `product` router object and be able to use its
defined routes and route handlers. */
  module.exports = product;