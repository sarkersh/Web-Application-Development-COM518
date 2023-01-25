const mysql=require('mysql2');
const con=mysql.createConnection({
    host: "localhost",
    user: "shakil", 
    password: "Shakil2023",
    database: "webapi",
});

con.connect((error)=>{
    if (error)
      console.log(`Failed to connect to mysql`);
    else
        console.log(`Connected to MySql successfully`);
});

module.exports=con;