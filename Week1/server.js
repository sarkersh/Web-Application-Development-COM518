const { Console } = require('console');
const express=require('express');
const app=express();
var port=5000;
const movies=[{
    "name": "Iron Man",
    "year" :2018,
}, 
{
    "name": "Terminator",
    "year" :2015,
}
, 
{
    "name": "Boxing",
    "year" :2015,
}
]
//route
app.get("/", (req, res)=>{
    //res.send("Hi Everyone. You are in the home page");
    res.json(movies);
});
//reg.body and req.params
app.get("/movies/:m_name", (req, res)=>{
    //res.send(`You entered movie name as ${req.params.m_name}` );
    const matching_movies=movies.filter(movie=>movie.name.toLowerCase()==req.params.m_name.toLowerCase());
    res.json(matching_movies);
});
app.get("/movies/:m_name/year/:m_year", (req, res)=>{
    //res.send(`You entered movie name as ${req.params.m_name} and the year you entered is ${req.params.m_year}` );
    const matching_movies_with_year=movies.filter(x=>x.name.toLowerCase()==req.params.m_name.toLowerCase() && x.year==req.param

const { Console } = require('console');
const express=require('express');
const app=express();
var port=5000;
const movies=[{
    "name": "Iron Man",
    "year" :2018,
}, 
{
    "name": "Terminator",
    "year" :2015,
}
, 
{
    "name": "Boxing",
    "year" :2015,
}
]
//route
app.get("/", (req, res)=>{
    //res.send("Hi Everyone. You are in the home page");
    res.json(movies);
});


//reg.body and req.params
app.get("/movies/:m_name", (req, res)=>{
    //res.send(`You entered movie name as ${req.params.m_name}` );
    const matching_movies=movies.filter(movie=>movie.name.toLowerCase()==req.params.m_name.toLowerCase());
    res.json(matching_movies);
});
app.get("/movies/:m_name/year/:m_year", (req, res)=>{
    //res.send(`You entered movie name as ${req.params.m_name} and the year you entered is ${req.params.m_year}` );
    const matching_movies_with_year=movies.filter(x=>x.name.toLowerCase()==req.params.m_name.toLowerCase() && x.year==req.params.m_year);
    res.json(matching_movies_with_year);
});

var server=app.listen(port, (error)=>{
    if (error)
        console.log("Something went wrong, Server Failed");
    else     
        {
            var port_number=server.address().port
            var listening_address=server.address().address
            console.log("Server started at port %s and the address is %s", port_number, listening_address);
            //console.log(`Server started at ${port}`);
        }
}); 
