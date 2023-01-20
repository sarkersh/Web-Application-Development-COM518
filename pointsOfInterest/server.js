require('dotenv').config();
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connection from "./config/dbConnection";

let app = express();

// config view engine
viewEngine(app);

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`pointsOfInterest App is running at http://localhost:${port}`);
});