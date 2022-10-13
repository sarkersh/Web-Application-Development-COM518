const express = require('express');
const app = express();
port=5000

app.get('/', (req, res)=>{
    res.send("Hi, Everyone. You are at the home page");
});

app.get('/contact', (req, res)=>{
    res.send("Hi, Everyone. You are at the contact page");
});

app.listen(port, (error)=>{
    if(error){
        console.log("Something went wrong, server wrong");
    }
    
    else{
        console.log(`Server started at port ${port}`);

    }
    
});