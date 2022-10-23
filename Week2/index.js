const express = require('express');
const app = express();
const mysql = require('mysql2');
var port = 5000;

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'movies',
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

app.get('/movies/:movie_name/year/:year', (req, res)=>{
    connection.query('select * from movies where name=? and year=?',[req.params.movie_name, req.params.year], (error, results)=>{
        if (error)
            {console.log("Something went wrong while fetching the data from the database");}
        else
            {res.json(results);}
    });
});

app.delete('/movies/:movie_name/year/:year', (req, res)=>{
    connection.query('delete from movies where name=? and year=?',[req.params.movie_name, req.params.year], (error, results)=>{
        if (error)
            {console.log("Something went wrong while deleting the data from the database");}
        else
            {res.json("Selected data got deleted");}
    });
});
app.post('/movies/add', (req, res)=>{
    connection.query('INSERT INTO movies(name, year) values (?,?)',[req.body.name, req.body.year], (error, results)=>{
        if (error)
            {console.log("Something went wrong while adding the data into the database");}
        else
            {res.json("Given data got updated");}
    });
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
