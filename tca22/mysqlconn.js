
const mysql = require('mysql2');


// change this as appropriate if you want to test
const conn = mysql.createConnection({
    host:'localhost',
    user: 'user',
    password: 'password',
    database: 'mysql'
});

// Q14 you need to add the full code to use session variables to enable a login system.

conn.connect( err => {
  if(err) {
    console.log('Could not connect to database server');
    process.exit(1);
  } else {
    console.log('Connected to mysql ok!');
  }
});

module.exports = conn;
