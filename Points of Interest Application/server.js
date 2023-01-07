import express from "express";
import viewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import connection from "./config/dbConnection";
import initWebRoutes from "./routes/web";

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// config view engine
viewEngine(app);

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Points of Interest App is started at http://localhost:${port}`);
});