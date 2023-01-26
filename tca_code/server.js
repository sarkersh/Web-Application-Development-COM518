const express = require('express');
const app = express();
const mysql = require('mysql2');


const conn = mysql.createConnection({
    host:'localhost',
    user: 'shakil',
    password: 'Shakil2023',
    database:'tcexam23'
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//express session
app.use(session({
    secret: "tcexam23-secret",
    resave: false,
    saveUninitialized: true
  }));
  

// Q14 you need to add the full code to use session variables to enable a login system.

conn.connect( err => {
  if(err) {
    console.log('Could not connect to database server');
    process.exit(1);
  } else {
    console.log('db conected!!');

    
    
    // Q4 complete the route to find all flights to the user's chosen 
    // destination on the user's chosen date 
    app.get('/search/:flightDestination/:flightDate', (req, res) => {
        conn.query("SELECT * FROM eaflights WHERE endcity = ? AND date = ?",
            [ req.params.city, req.params.date], 
            (err, results, fields) => {
                // Q5 complete to return the flight details as JSON 
                if(err)
                {
                    console.log('Failed to retrive data from database');
                    res.status(404).json({sucess:'False'});
                }else
                {
                    console.log('Successful to retrieve the data from database');
                    res.status(200).json(results); 
                }
            });
    });

    // Q7 complete the route to book the flight for 1 passenger and a hard-coded
    // username by inserting a record in the bookings table
    app.post('/flightbook/:flightId', (req, res) => {
        conn.query("INSERT INTO bookings (username, flightID,date,npass)values(?, ?, ?)",
            [ req.body.usrename,req.body.flightID, req.body.npass],
            (err, results, fields) => {
                if(err) {
                    res.status(500).json({'error': 'Internal error'});
                } else {
                    res.json({'success': 1});i 
                }
            });
    });

 
    app.post('/flightadd', (req, res) => {
        // Q11 send back an error if any of the details are blank (you need to add this code...)

        // Q10 complete the 'add flight' route as described in the paper
        conn.query("INSERT INTO eaflights(fnumber, endcity,date,depart,arrive,price,nseats)values(?, ?, ?, ?, ?, ?, ?)",
        [ req.body.fnumber,req.body.endcity, req.body.date, req.body.depart, req.body.arrive, req.body.price, req.body.nseats ],
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
        const {username, password}=req.body;
        if(username && password){
            try {
                const[data]= conn.query(
                    `SELECT * FROM rusers WHERE username="${username}"`
                );
                if (password== data.password){
                    res.status(200)
                    .json({ msg: "Login Successfully", user: data.username });
                }else {
                    res.status(401).json({ msg: "Login failed" });
                }
            } catch (error) {
                res.status(401).json({ err: err.msg });
            }
        }
        

    });

    app.listen(3000);
  }
});
