var express=require('express');
var app=express()
var port=3000

var path = require('path')

app.set(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

var data=[{
    name: "Amjad",
    age: 40
},
{
    name: "Amjad",
    age: 40
}
]

app.get('/', (req, res)=>{
    res.json('main', data);
});

var server=app.listen(port, (error)=>{
    if (error)
        console.log("Server failed to start");
    else
        console.log(`Server started at port ${port}`);
});

