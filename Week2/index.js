const express = require('express');
const app = express();
const mysql = require('mysql2');
var port = 5000;

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'flims',
});

connection.connect((error)=>{
    if (error){
        console.log("MySql connection failed");
    } else {
        console.log("DB Connected");
    }
});

app.get('/', (req, res)=>{
    connection.query('select * from movies', [], (error, result)=>{
        if (error){
            console.log("Something went wrong");
        } else {
            res.json(result);
        }
    });
})

app.get('/movies/:movie_name', (req, res)=>{
    connection.query('select * from movies where name = ?', [req.params.movie_name], (error, result)=>{
        if (error){
            console.log("Something went wrong");
        } else {
            res.json(result);
        }
    });
})

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
