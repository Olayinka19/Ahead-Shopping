// DEPENDENCIES

/* The line `const app = require ("./app.js");` is importing the contents of the `app.js` file and
assigning it to the variable `app`. This allows the code in the current file to access and use the
functions, variables, or other exports defined in `app.js`. */
const app = require ("./app.js");

// CONFIGURATION

/* `require ("dotenv").config();` is a line of code that is used to load environment variables from a
`.env` file into the current application. The `dotenv` package is used to accomplish this. The
`.env` file typically contains key-value pairs of environment variables that are specific to the
application, such as API keys or database connection strings. By calling `config()` on the `dotenv`
package, the environment variables defined in the `.env` file are loaded into the application's
process.env object, making them accessible throughout the application. */
require ("dotenv").config();

const PORT = process.env.PORT;

// LISTEN
/* The code `app.listen({PORT}, () => { console.log("listening on "); });` is starting a server
and listening for incoming requests on a specified port. The `PORT` variable is typically set in the
`.env` file and represents the port number on which the server will listen. When a request is
received on that port, the callback function `() => { console.log("listening on "); }` is
executed, which logs a message indicating that the server is listening on the specified port. */
app.listen(PORT, () => {
    console.log(`Welcome to Ahead-shopping! ${PORT} `);
  });