const express = require('express');
const app = express();
const mysql = require('mysql2');
const conn = require('./mysqlconn');



// Q14 you need to setup session variables on the server

// "climb search" route
// Q4 complete the route to find all climbs of the user's chosen difficulty

app.get('/climbSearch/:diff', (req, res) => {
    conn.query('SELECT * FROM mt_mountains where difficulty = ?',
        [req.params.difficulty], 
        (err, results, fields) => {
            // Q5 complete to return the details as JSON
            if(err) {
                console.log('Failed to retrieve data');
                res.status(404).json({success: 'False'});
            } else {
                console.log('Successfully data retrieve');
                res.status(200).json(results);
            }
    });
});


// Q7 complete the route to allow user to "like" the climb. It should
// increase the likes by one. 
app.post('/like/:climbId', (req, res) => {
    conn.query("UPDATE ?????",
        [ ????? ], 
        (err, results, fields) => {
            if(err) {
                res.status(500).json({error: 'Internal error'});
            } else {
                res.json({'success': 1});
            }
        });
});

// "add climb" route
app.post('/addClimb', (req, res) => {
    // Q11 send back an error if the height or distance is 0 or less 

    // Q10 complete the route as described on the paper
    conn.query("INSERT INTO ?????",
        [ ????? ], 
        (err, results, fields) => {
            if(err) {
                res.status(500).json({error: 'Internal error'});
            } else {
                res.json({'success': 1});
            }
        });
});

// Q14 complete the login route on the server
app.post('/login', (req, res) => {
        ?????
});


app.listen(3000);

