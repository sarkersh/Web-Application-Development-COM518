const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
//const MySQLStore = require('express-mysql-session')(expressSession);

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'tca_database'
});
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


// Q14 you need to add the full code to use session variables to enable a login system.
// cookie parser middleware
app.use(cookieParser());

app.use(sessions({
    secret: "this-is-my-top-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // This will only work if you have https enabled!
        maxAge: 60000 // 1 min
    }
}));


const isLoggedIn = (req, res, next) => {
    const session=req.session;
    if(session.username){
        return next();
    }
    return res.status(401).json({error: 'You do not have permission to perform this task'})
}

const isAdmin = (req, res, next) => {
    const session=req.session;
    if (session.admin == 1) {
        return next();
    }

    return res.status(401).json({error: 'You do not have permission to perform this task'})
}

conn.connect( err => {
  if(err) {
    console.log('Could not connect to database server');
    process.exit(1);
  } else {


    // Q4 complete the route to find all flights to the user's chosen 
    // destination on the user's chosen date 
    app.get('/search/:flightDestination/:flightDate',
        (req, res) => {
        const session=req.session;
        console.log(session)
        console.log(req.session.admin)

        const fdate = req.params.flightDate;
        const fdest = req.params.flightDestination;

        conn.query("SELECT * FROM eaflights WHERE date = ? AND endcity = ?",
            [ fdate,fdest ],
            (err, results, fields) => {
                // Q5 complete to return the flight details as JSON
                if(err) {
                    res.status(500).json({error: 'Internal error'});
                } else {
                    res.json({results});
                }
            });
    });

    // Q7 complete the route to book the flight for 1 passenger and a hard-coded
    // username by inserting a record in the bookings table
    app.post('/flightbook/:flightId',  (req, res) => {
        const flightId = req.params.flightId;
        const fdate = req.body.flightDate;
        const fdest = req.body.flightDestination;

        conn.query("INSERT INTO bookings (username, flightID,npass ) VALUES (?, ?, ?)",
            [ "fred",flightId,1 ],
            (err, results, fields) => {
                if(err) {
                    res.status(500).json({'error': 'Internal error'});
                } else {
                    res.json({results});
                }
            });
    });

 
    app.post('/flightadd', isAdmin, ( req, res) => {
        // Q11 send back an error if any of the details are blank (you need to add this code...)

        if (req.body.number  == "" ||
            req.body.dest  == "" ||
            req.body.fdate  == "" ||
            req.body.deptime  == "" ||
            req.body.arrtime  == "" ||
            req.body.numSeats  == "" ||
            req.body.price == ""
        ) {
            return res.status(400).json({'error': 'Please enter all details'});
        }

        // Q10 complete the 'add flight' route as described in the paper
        conn.query("INSERT INTO eaflights (fnumber, endcity, date, depart, arrive, price, nseats ) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [ req.body.number,
                req.body.dest,
                req.body.fdate,
                req.body.deptime,
                req.body.arrtime,
                req.body.price,
                req.body.numSeats
            ],
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
        const user = req.body;
        console.log(user);

        if(user.username == '' || user.password == '') {
            return res.status(400).json({error: 'Invalid username or password'})
        }

        conn.query("SELECT * FROM rusers WHERE uname = ? AND pword = ?",
            [ user.username, user.password ],
            (err, results, fields) => {
                if(err) {
                    res.status(500).json({error: 'Internal error'});
                } else {
                    if(results.length == 0) {
                        res.status(401).json({error: "Incorrect login!"});
                    } else {
                        req.session.username = results[0].uname;
                        req.session.admin = results[0].admin;
                        req.session.userid=req.body.username;

                        res.json(results);
                    }
                }
            })
    });

    app.listen(3000);
  }
});
