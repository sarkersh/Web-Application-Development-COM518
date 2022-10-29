const express = require('express');
const app = express();
const mysql = require('mysql2');


const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database:'mysql'
});

// Q14 you need to add the full code to use session variables to enable a login system.

conn.connect( err => {
  if(err) {
    console.log('Could not connect to database server');
    process.exit(1);
  } else {

    
    
    // Q4 complete the route to find all flights to the user's chosen 
    // destination on the user's chosen date 
    app.get('/search/:flightDestination/:flightDate', (req, res) => {
        conn.query('SELECT * FROM ????? WHERE ????? AND ?????",
            [ ????? ], 
            (err, results, fields) => {
                // Q5 complete to return the flight details as JSON 
            });
    });

    // Q7 complete the route to book the flight for 1 passenger and a hard-coded
    // username by inserting a record in the bookings table
    app.post('/flightbook/:flightId', (req, res) => {
        conn.query("INSERT INTO ?????",
            [ ????? ],
            (err, results, fields) => {
                if(err) {
                    res.status(500).json({'error': 'Internal error'});
                } else {
                    res.json({'success': 1});
                }
            });
    });

 
    app.post('/flightadd', (req, res) => {
        // Q11 send back an error if any of the details are blank (you need to add this code...)

        // Q10 complete the 'add flight' route as described in the paper
        conn.query("INSERT INTO ?????",
            [ ????? ],
            (err, results, fields) => {
                if(err) {
                    res.status(500).json({'error': 'Internal error'});
                } else {
                    res.json({'success': 1});
                }
            });
    });

    // Q14 complete the login route on the server
    app.post('/login', (req, res) => {
        // ?????
    });

    app.listen(3000);
  }
});
