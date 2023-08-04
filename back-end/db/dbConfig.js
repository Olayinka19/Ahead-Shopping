/* `const pgp = require("pg-promise"());` is importing the `pg-promise` library and assigning it to the
constant variable `pgp`. This library is used to create a connection to a PostgreSQL database and
perform database operations. */
const pgp = require("pg-promise")();
require("dotenv").config();

/* `require("dotenv").config();` is loading the `.env` file and configuring the environment variables
defined in it. The `.env` file is typically used to store sensitive information such as database
credentials, API keys, and other configuration settings. By calling `config()` on the `dotenv`
module, the environment variables defined in the `.env` file are loaded into the current
environment, making them accessible in the code. */


/* The `const connect` object is defining the connection parameters for the PostgreSQL database. It is
using the values of environment variables `PG_HOST`, `PG_PORT`, `PG_DATABASE`, and `PG_USER` to set
the corresponding properties of the `connect` object. These environment variables are typically set
in a `.env` file and loaded into the code using the `dotenv` library's `config()` function. */
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
}

/* `const db = pgp(connect)` is creating a new instance of the `pg-promise` library and connecting it
to a PostgreSQL database using the connection parameters defined in the `connect` object. The `db`
constant is then assigned this instance, which can be used to perform database operations such as
querying, inserting, updating, and deleting data. */
const db = pgp(cn);

/* `module.exports = db;` is exporting the `db` object so that it can be used in other files. When a
file is imported using the `require` function in another file, the exported value of the file is
returned. In this case, the `db` object, which represents the connection to the PostgreSQL database,
is being exported so that it can be used in other files to perform database operations. */
module.exports = db;