// DEPENDENCIES


const app = require ("./app.js");

// CONFIGURATION

require ("dotenv").config();

const PORT = process.env.PORT;

// LISTEN
var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://hivysdvl:RzKBvtpa20G57tZldzbO2_GtRvZETRuO@ruby.db.elephantsql.com/hivysdvl" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log("Connected To Database");
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

app.listen(PORT, () => {
    console.log(`Welcome to OlaFolio Fruits! ${PORT} `);
  });