var express=require('express');
var app=express();
var path=require('path')
const port=process.env.port;
require('./database/database.js');

//------M-Model----V-View----C-controller---------------------
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
const static_path=path.join(__dirname, 'public');
app.use(express.static(static_path));

require('./routes/routes.js')(app);
// require('./routes/attachCookie.js')(app);
// require('./routes/auth.js')(app);
// require('./routes/error-handler.js')(app);
// require('./routes/not-found.js')(app);


app.get('/', (req, res)=>{
    res.render("home.ejs");
});
app.get('/login', (req, res)=>{
  res.render("login.ejs");
});
app.listen(port, (error)=>{
    if (error)
      console.log(`Failed to start the Server at port ${port}`);
    else
        console.log(`Server successfully started at port: ${port}`);
});

