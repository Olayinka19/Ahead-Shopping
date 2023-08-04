/* The code is importing the `express` and `cors` modules and creating an instance of the `express`
application. */
const express = require('express');
const cors = require('cors');
const app = express();

const productController = require("./controllers/productController");

// Configure express
app.use(cors());
app.use(express.json());
/* The code `app.get("/", (req, res) => { res.send("Welcome to the server side!") })` is defining a
route handler for the root URL ("/") of the server. When a GET request is made to the root URL, the
server will respond with the message "Welcome to the server side!". */

app.get("/", (req, res) => {
    res.send("Welcome to Ahead Shopping!")
})
/* `app.get("/products", productControllers);` is defining a route handler for the "/products" URL of
the server. When a GET request is made to the "/products" URL, the server will execute the
`productControllers` function to handle the request and send a response. The `productControllers`
function is not defined in the provided code, so it would need to be implemented separately. */
app.get("/products", productController);
/* The code `app.get("*", (req, res) => { res.send(404).json({error: "Page not found"}) })` is defining
a route handler for any URL that does not match any of the previously defined routes. When a GET
request is made to any URL that has not been explicitly defined, the server will respond with a 404
status code and a JSON object containing an error message "Page not found". */
app.get("*", (req, res) => {

    res.send(404).json({error: "Page not found"})
})

/* `module.exports = app;` is exporting the `app` object so that it can be used in other files. By
assigning `app` to `module.exports`, any file that imports this module will have access to the `app`
object and can use it to define routes and handle requests. */
module.exports = app;