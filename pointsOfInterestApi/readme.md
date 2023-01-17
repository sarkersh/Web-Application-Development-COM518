        app.get('/jsonExample3', (req, res) => { 
            res.json(politicians);
        });


        const matchingSongs = allSongs.filter ( song => song.title.toLowerCase() == 'crazy' );

        /from/:year1/to/:year2

### cors
        const cors = require('cors');app.use(cors());

        // index.js - CLIENT SIDE code, runs in the browser

        function ajaxSearch(productType) {
            fetch(`https://store.example.com/api/product/${productType}`)
                .then(response => response.text())
                .then(text => {
                    document.getElementById('results').innerHTML = text; 
                });
        }
        
        // Make the AJAX run when we click a
        buttondocument.getElementById('ajaxButton').addEventListener('click', ()=> { 
            // Read the product type from a text field
            const product = document.getElementById('productType').value; 
            ajaxSearch(product);
        });


### parse json

        function ajaxSearch(productType) { // Send a request to our remote URL 
            const response = fetch(`https://store.example.com/api/product/${productType}`).then(response => response.json()).then(products => {
                // Loop through the array of JSON objects and add the results to a <div> 
                let html = "";
                products.forEach(product => {
                    html += `Product Name: ${product.name} Manufacturer: ${product.manufacturer} Price: ${product.price}<br />`;
                });
                document.getElementById('results').innerHTML = html;
            });
        }
        
        // Make the AJAX run when we click a button
        document.getElementById('ajaxButton').addEventListener('click', () => {
            // Read the product type from a text field
            const product = document.getElementById('productType').value;
            ajaxSearch(product);
        });

### async/await
        
        async function ajaxSearch(productType) {
        // Send a request to our remote URL
            const response = await fetch(`https://store.example.com/api/product/${productType}`);
        // Parse the JSON.
            const products = await response.json();
        // Loop through the array of JSON objects and add the results to a <div>
            let html = "";
            products.forEach(product => {
                html += `Product Name: ${product.name} Manufacturer: ${product.manufacturer} Price: ${product.price}<br />`;
            });
            document.getElementById('results').innerHTML = html;
        }

### static content
        app.use(express.static('public'));

### Using the promise-based mysql2 API
        
        const express = require('express');
        const app = express();
        const mysql = require('mysql2/promise');
        
        async function startApp() {
            try {
                var con = await mysql.createConnection({
                    host: 'localhost',
                    user: 'myuser',
                    password: 'mypass',
                    database: 'mydb'
                });
                const conn = await con.connect();
                console.log('connected to mysql ok');
                app.get('/student/:studentid', async (req, res) => {
                    try {
                        const [results, fields] = await con.query(`SELECT *
                                                                   FROM students
                                                                   WHERE studentid = ?`, [req.params.studentid]);
                        res.json(results);
                    } catch (e) {
                        res.status(500).json(e);
                    }
                });
                app.listen(3000);
            } catch (e) {
                console.error(`ERROR connecting to database: ${e}`);
            }
        }
        
        startApp();


### more ajax

        const response = await fetch('https://example.com/product/223');
        if(response.status == 404) { 
            alert("The product was not found!");
        } else { 
            const data = await response.json(); 
            // etc...
        }

### post data

        const product = { 
                name: "Cornflakes", 
                manufacturer: "Organic Products Ltd", 
                price: 2.79
        };
        const response = await fetch('https://example.com/products/newproduct', { 
            method: 'POST', 
            headers: { 
                'Content-Type' : 'application/json' 
            }, 
            body: JSON.stringify(product)
        });

### middleware
        //custom middleware
        app.use(function(req, res, next) {
            console.log(req.url);
            next();
        });


       //express.json() is a function that returns middleware to parse JSON in the request body.    
        app.use(express.json());

        // handle cors 
        app.use((req, res, next) => { 
            res.set('Access-Control-Allow-Origin', '*'); 
            next();
        }



Middleware with specific routes
We can use routes to specify that a given middleware will only run before handling
a particular route
. This can be useful as, we might want certain middlewareto only run in response to certain requests. We do this by supplying an optional first argument to
use()
to specify which routes will run this middleware. Forexample, the middleware below (showing the time of the request once again) will only run with a route of
search
followed by a search term:
        
        const express = require('express');
        const app = express();
        
        // Note that middleware only runs with /search/:query route
        app.use( '/search/:query', (req,res,next) => { 
            console.log(`Received a request for /search at ${Date.now()} milliseconds.`); 
            next();
        });
        
        // Middleware not called
        app.get('/', (req,res) => { 
            res.send(`Hello world!`);
        });
        // Middleware called
        app.get('/search/:query', (req,res) => { 
            res.send(`Searching for ${req.params.query}...`);
        });
        
        app.listen(3000);

### Middleware with specific routes
We can use routes to specify that a given middleware will only run before handling
a particular route
. This can be useful as, we might want certain middlewareto only run in response to certain requests. We do this by supplying an optional first argument to
use()
to specify which routes will run this middleware. Forexample, the middleware below (showing the time of the request once again) will only run with a route of
search followed by a search term:

        const express = require('express');
        const app = express();
        
        // Note that middleware only runs with /search/:query route
        app.use( '/search/:query', (req,res,next) => { 
            console.log(`Received a request for /search at ${Date.now()} milliseconds.`); 
            next();
        });
        
        // Middleware not calledapp.get('/', (req,res) => { 
        res.send(`Hello world!`);
        });
        
        // Middleware called
        app.get('/search/:query', (req,res) => { 
        res.send(`Searching for ${req.params.query}...`);
        });
        
        app.listen(3000);

### Middleware with specific HTTP methods
Furthermore, we can specify that middleware will only run for specific HTTP methods (GET, POST, DELETE, etc). We do this by replacing
use()
with a functionrepresenting the HTTP method (
get(),post()etc). A good real-world use of this would be to prevent access to routes which modify data (POST, DELETE, PUT)unless you're logged in. For example:

        const express = require('express');
        const app = express();
        
        // This middleware will only run with POST requests, due to the use of// app.post() rather than app.use()// * means 'match all', so this middleware will run with all POST requests
        app.post( '*', (req,res,next) => { 
            console.log(`Received a POST request at ${Date.now()} milliseconds.`); 
            next();
        });

        // Middleware not called
        app.get('/', (req,res) => { 
            res.send(`Hello world!`);
        });
        
        // Middleware called, because it uses post()
        
        app.post('/product/new', (req,res) => { 
            // Code to add a product to the database
        });
        
        app.listen(3000);


### Using multiple middleware with one statement
You can use multiple items of middleware in one use(),get() or post()
call. You specify each middleware function as a successive parameter, so that the syntax is:

        app.use('/route', middleware1, middleware2, middleware3...);

So, for example:

        app.use( '/testroute', (req, res, next) => { 
            console.log('Running middleware 1') 
            next();
        }, (req, res, next) => { 
            console.log('Running middleware 2') 
            next(); 
        });


In this example, all requests to
/testroute will be intercepted by both
specified middleware functions, and both messages will be displayed on the console, inorder (the first specified function will run first).
Using middleware to prevent access to a route under certain conditions
As implied in the previous section, you can use middleware to
prevent the route ever being called under certain conditions
. A good example would be toimplement a check that the user is logged in before they can access certain sensitive routes. You can prevent access to given routes by only calling
next()
if acertain condition is met, otherwise you send back a response (from the middleware) indicating that the main route cannot be processed. In the example below,the middleware handling the
/christmasSurprise
route tests whether it's December. If it is, then the
/christmasSurprise
route is called with
next()
. if not, the user is toldto come back when it's Christmas!

        const express = require('express');
        const app = express();
        
        // Christmas checker middleware: is it December?
        app.use('/christmasSurprise', (req, res, next) => { 
            // Create an object representing today's date 
            const d = new Date(); 
            // Get the current month, note that d.getMonth() gives a month in the range 
            // 0-11 so we have to add one to get the normal numbering (1-12) 
            const month = d.getMonth() + 1; 
            // If it's December, let the client access the route 
            if (month == 12) { 
                next(); 
            // If not, tell them to come back later! 
            } else { 
                res.send(`It's not Christmas yet, come back in ${12 - month} months!`); 
            }
        });

        // Christmas surprise route, "guarded" by the middleware above
        app.get('/christmasSurprise', (req, res) => { 
            const html = "<h1>HERE IS YOUR CHRISTMAS SURPRISE!</h1> ... etc ..."; 
            res.send(html);
        });

        app.listen(3000);

### mySQL session management

        const expressSession = require('express-session');
        const MySQLStore = require('express-mysql-session')(expressSession);



        // require mysql connection from external module, as per last week
        const con = require('./conn'); 
        
        // use connection to create the session store. Note we have to use the connection in promise-based mode
        const sessionStore = new MySQLStore({ } , con.promise());

### set middleware session configuration

        app.use(expressSession({
            // Specify the session store to be used.
            store: sessionStore,

            // a secret used to digitally sign session cookie, use something unguessable (e.g. random bytes as hex) in a real application.
            secret: 'BinnieAndClyde',

            // use as recommended by your chosen session store - related to internals of how session stores work
            resave: false,

            // save session to store before modification
            saveUninitialized: false,

            // reset cookie for every HTTP response. The cookie expiration time will be reset, to 'maxAge' milliseconds beyond the time of the response. // Thus, the session cookie will expire after 10 mins of *inactivity* (no HTTP request made and consequently no response sent) when 'rolling' is true. // If 'rolling' is false, the session cookie would expire after 10 minutes even if the user was interacting with the site, which would be very // annoying - so true is the sensible setting.
            rolling: true,

            // destroy session (remove it from the data store) when it is set to null, deleted etc
            unset: 'destroy',

            // useful if using a proxy to access your server, as you will probably be doing in a production environment: this allows the session cookie to pass through the proxy
            proxy: true,

            // properties of session cookie
            cookie: { 
                maxAge: 600000,   // 600000 ms = 10 mins expiry time
                httpOnly: false   // allow client-side code to access the cookie, otherwise it's kept to the HTTP messages
            }
        }));


### Session variables and Authentication
A common use of session variables is in site authentication. In authentication, the user must enter a username and password to gain acces to the site. What happens is asfollows:
- An authentication route tests that the user entered a valid username and password on a web form
- If they did, we store the username in a session variable, e.g. req.session.username
- We protect any routes which we want to restrict access to logged in users by writing a piece of middleware which checks for the existence of this session variable.Thus, suchroutes are "locked out" to unauthorised users
- We then write a logout route which sets req.session to null , as described above, thus terminating the session.

Here is some code (an extract from a full server) which will actually do this. Note that we have three routes and one piece of 'checking' middleware.


        // Login route
        app.post('/login', (req, res) => {
            if (req.body.username == 'SimonSmith' && req.body.password == 'secret') {
                req.session.username = req.body.username;
                res.json({success: 1});
            } else {
                res.status(401).json({error: "Incorrect login!"});
            }
        });
        // Logout route
        app.post('/logout', (req, res) => {
            req.session = null;
            res.json({'success': 1});
        });
        // 'GET' login route - useful for clients to obtain currently logged in user
        app.get('/login', (req, res) => {
            res.json({username: req.session.username || null});
        });
        // Middleware which protects any routes using POST or DELETE from access by users who are are not logged in
        app.use((req, res, next) => {
            if (["POST", "DELETE"].indexOf(req.method) == -1) {
                next();
            } else {
                if (req.session.username) {
                    next();
                } else {
                    res.status(401).json({error: "You're not logged in. Go away!"});
                }
            }
        });


### Password hashing


        const dbres = this.db.query('SELECT * FROM users WHERE username=?', 
            [req.body.username], async (err, results, fields) => {
            if (results.length == 1) {
                const match = await bcrypt.compare(req.body.password, results[0].password);
                if (match === false) { 
                    // passwords don't match
                } else { 
                    // passwords do match, carry on...
                }
            } else { 
                // ... no results ... 
            } 
        });


### Data Access Objects
### in student dao 

        class StudentDao {

            // conn is our mysql database connection
            // table is the table storing the students
            constructor(conn, table) {
            this.conn = conn;
            this.table = table;
            }
        
        
            // find a student with a given ID
        
            findStudentById(id) {
                return new Promise ( (resolve, reject) => {
                    this.conn.query(`SELECT * FROM ${this.table} WHERE ID=?`, [id],
                        (err, results, fields) => {
                            if(err) {
                                reject(err);
                            } else if (results.length == 0) {
                                // resolve with null if no results - this is not considered an error, so we do not reject
                                resolve(null); 
                            } else {
                                // only one student will be found but "results" will still be an array with one member. 
                                // To simplify code which makes use of the DAO, extract the one and only row from the array 
                                // and resolve with that.
                                resolve(results[0]);
                            }
                        });
                });
            }
                                    
        
            // find all students on a given course
            findStudentsByCourse(course) {
                return new Promise ( (resolve, reject) => {
                    this.conn.query(`SELECT * FROM ${this.table} WHERE course=?`, [course],
                        (err, results, fields) => {
                            if(err) {
                                reject(err);
                            } else {
                                resolve(results);
                            }
                        });
                });
            }
        
            // add a new student 
        
            addStudent(name, course) {
                return new Promise ( (resolve, reject) => {
                    this.conn.query(`INSERT INTO ${this.table} (name,course) VALUES (?,?)`, [name, course],
                        (err, results, fields) => {
                            if(err) {
                                reject(err);
                            } else {
                                resolve(results.insertId); // resolve with the record's allocated ID
                            }
                        });
                });
            }
        
            // update a student - takes student ID, name, and course as parameters and 
            // updates the name and the course of the record with that ID
            // For you to complete!
        
            updateStudent(id, name, course) {
            }
        
        
            // delete a student - takes a student ID as a parameter
            // and deletes the record with that ID.
            // For you to complete!
        
            deleteStudent(id) {
            }
        }
        
        module.exports = StudentDao; // so that other code can use it

#### use the dao

        const dao = new StudentDao(dbconn, "students");
        const student = await dao.findStudentById(req.params.id);

### Controllers & Routes
We can further enhance the modularity of our code through the use of controllers. Controllers are part of the model/view/controller (MVC) architecture, in which we divide the code into three components:

 - the model - those components which directly interact with the database, i.e. the DAO
 - the view - those components used to present the data (i.e. output the data as JSON or as HTML)
 - the controller - which manages the interaction between the model and the view.

Router can takes the role of the controller but for improved modularity of your code, however, you can create separate controller objects to represent the controller, and add methods to these objects to carry out the functionality of your router. Then, in your router, you create a controller object and call these methods from each route in the router.


### in students route

        const express = require('express');
        const studentRouter = express.Router();
        
        // include our database connection, note that .. means "go up a folder" so the
        // mysqlconn.js is in the parent folder to the routes folder
        const db = require('../mysqlconn');
        
        // assume the StudentController is inside a 'student.js' file within the
        // 'controllers' folder of the project, as described above
        const StudentController = require('../controllers/student');
        
        
        // Create the controller object, and pass in the database connection as an argument
        const sController = new StudentController(db);
        
        // handle get requests to route /id/:id using the controller's findStudentById() method
        studentRouter.get('/id/:id', sController.findStudentById.bind(sController));
        
        // handle get requests to route /course/:course using the controller's findStudentByCourse() method
        studentRouter.get('/course/:course', sController.findStudentByCourse.bind(sController));
        
        // handle post requests to /create using the controller's addStudent() method
        studentRouter.post('/create', sController.addStudent.bind(sController));
        
        module.exports = studentRouter; // so that main application can use it

### in student controller

        const express = require('express');
        const studentRouter = express.Router();
        
        // include our database connection, note that .. means "go up a folder" so the
        // mysqlconn.js is in the parent folder to the routes folder
        const db = require('../mysqlconn');
        
        // assume the StudentController is inside a 'student.js' file within the
        // 'controllers' folder of the project, as described above
        const StudentController = require('../controllers/student');
        
        
        // Create the controller object, and pass in the database connection as an argument
        const sController = new StudentController(db);
        
        // handle get requests to route /id/:id using the controller's findStudentById() method
        studentRouter.get('/id/:id', sController.findStudentById.bind(sController));
        
        // handle get requests to route /course/:course using the controller's findStudentByCourse() method
        studentRouter.get('/course/:course', sController.findStudentByCourse.bind(sController));
        
        // handle post requests to /create using the controller's addStudent() method
        studentRouter.post('/create', sController.addStudent.bind(sController));
        
        module.exports = studentRouter; // so that main application can use it


## passport
### Using Passport
To use Passport, you need to install both Passport itself and one or more strategies as NPM packages. For example the npm command below will install both Passport and the local strategy:

        npm install passport passport-local

        const passport = require('passport');

You then import the specific strategy you want to use. For example, to use the local strategy, use:
        
        const LocalStrategy = require('passport-local').Strategy;

You must also link Passport to your Express application as middleware. This can be done as follows:

        app.use(passport.initialize());
        app.use(passport.session());


### login - Route

        app.post('/login',
        
            // call Passport's authenticate() method (which is actually middleware)
            // This will use the appropriate strategy to authenticate the user: the
            // local strategy is used here as we pass an argument of 'local'. 
            // The strategy must authenticate the user with the given credentials
            // and return an object containing the user details on completion.
            //
            // If the authentication fails, a 401 will be AUTOMATICALLY sent back.
        
            passport.authenticate('local'), 
        
            // The actual route handler, which actually sends a response back to the
            // client. This will be called by the strategy if the login was 
            // successful. (We could also use additional items of middleware here
            // to run after the authentication)
        
            (req, res) => {
                // the strategy code will attach the user details to the request object 
                // 'req' as the property 'req.user'. This is explained below.
                // Here, we send 'req.user' back to the client as JSON.
                res.json(req.user); 
            }
        );


### The LocalStrategy

        // Note that the local strategy will AUTOMATICALLY read fields named 'username'
        // and 'password' from req.body, and will supply them as parameters to the
        // function passed in as an argument to LocalStrategy. So in the code below,
        // 'username' and 'password' will contain the user's login credentials sent
        // within a POST request.
        
        passport.use(new LocalStrategy(async(username, password, done)=> {
            // Imagine we have a user DAO which contains code to query the 'users' table
            const userDao = new UserDao(db);
            try {
                // imagine our user DAO has a method to check the username and password
                // against the database. It will return an object containing the full
                // details of the user (username, user id, admin status) if the
                // username and password is correct, or null otherwise.
                const userDetails = await userDao.login(username, password);
        
                // If null is returned, call the 'done()' callback with 'false' as
                // the second argument - to indicate authentication was unsuccessful
                // This will cause Passport to AUTOMATICALLY send back a 401 to the client
                if(userDetails === null) {
                    return done(null, false);
                } else {
                    // otherwise call the 'done()' callback with the user object as
                    // the second argument. This will be automatically attached to 
                    // the 'req' object as 'req.user'
                    return done(null, userDetails);
                }
            } catch(e) {
                // If there were errors with the database (e.g could not connect to
                // the database), call 'done()' with the error as the first argument
                // This will AUTOMATICALLY send back a 500 error with the contents of
                // "e" in the response body.
                return done(e);
            }
        }));


### Serialisation and deserialisation - persisting the user across multiple requests

        // Serialise function - saves the user from req.user to the session
        // The parameter 'userDetails' is the information contained within 'req.user'
        // We only need to save the ID, as that is sufficient to identify the user

        passport.serializeUser((userDetails, done) => {
                done(null, userDetails.id);
        });
        
        // Deserialise function - restores the user from the session to req.user.
        // It needs to perform a database query (using our DAO) to restore the full
        // user details (username, admin status) using the ID.
        // The full user object is passed to done(), this will result in it being
        // attached to req.user.
        
        passport.deserializeUser(async(userid, done) => {
            try {
                const userDao = new UserDao(db);
        
                // use the DAO to find the full user details from the user ID.
                const details = await userDao.findById(userid);
        
                // call "done()" with the full details. This will result in the details
                // being attached to the "req" object as "req.user".
                done(null, details);
            } catch(e) {
                // handle error by calling done() with the error information
                done(e);
            }
        });
### Handling authentication errors
How are authentication errors handled? If done() is called from your strategy with false as the second argument (to indicate that the login is invalid), Passport will automatically send back a 401 Unauthorized HTTP response to the client, which the client can then test for. However, you may want to supply a custom JSON response to the client.

To do this, you need to set up an additional route to send back the JSON, e.g:

        app.get('/badlogin', (req, res) => {
                res.status(401).json({error: "The login was invalid"});
        });

and then tell Passport to redirect to this route if the login fails using the failureRedirect option to passport.authenticate(), e.g:

        passport.authenticate('local', { failureRedirect: '/badlogin' } )




















