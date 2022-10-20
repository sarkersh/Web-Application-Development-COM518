const express = require('express');
const app = express();
const mysql = require('mysql2');
var prot = 5000;

const connection =mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Shakil2023',
    database : 'flims'
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
