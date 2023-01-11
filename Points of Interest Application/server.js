import bodyParser from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";


const app = express();

app.use(cookieParser("secret"));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
       maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
 }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// config view engine
viewEngine(app);

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Points of Interest App is started at http://localhost:${port}`);
});