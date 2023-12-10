const pool = require('./database'); // Adjust the path to your database.js file

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connection to the database was successful:', res.rows);
  }
  pool.end();
});
