const { Pool } = require('pg');

// Configure the connection to your ElephantSQL database
const pool = new Pool({
  user: 'hivysdvl',
  host: 'bruby',
  database: 'OlaFolio_fruits',
  password: 'RzKBvtpa20G57tZldzbO2_GtRvZETRuO',
  port: '5432',
});

// Example query
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Query result:', res.rows[0]);
  }
  pool.end(); // Close the connection pool
});
