var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'jimis.net',
  user: 'dogz',
  password: 'dogz123!@#',
  database: 'dogz'
});



module.exports = {
  pool: pool
};