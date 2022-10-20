


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
