//import createError from 'http-errors'

import express from 'express';
import passport from 'passport';
//import { Strategy as LocalStrategy } from "passport-local";

import dotenv from 'dotenv';
//set the path to the environment variables
dotenv.config({
    path: './.env'
})

/*
import { URL } from 'url'; // in Browser, the URL in native accessible on window
const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;
*/


import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//db/mysql session management
//--


//import expressMySqlSession from "express-mysql-session";
//const MySQLStore   = expressMySqlSession(expressSession);


//import route files which define the ejs files and data to pass to the browser
import indexRouter from './routes/indexRouter.js';
import mapRouter from './routes/mapRouter.js';
import poiRouter from './routes/poiRouter.js';
import recommendationRouter from './routes/recommendationRouter.js';
import reviewRouter from './routes/reviewRouter.js';
import usersRouter from './routes/usersRouter.js';

import session from "express-session";


const app = express();

//--
app.use(express.json())


// set the view engine to ejsp
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//------app.use(logger('dev'));
app.use(express.json());



// to not accept form data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

//this allows us to use static files like css/images/csv/ etc
//files must live in the public folder
app.use(express.static(path.join(__dirname, 'public')));


//===================================================
// for passport
//===================================================
//express session
app.use(session({
  secret: "poi-session-secret",
  resave: false,
  saveUninitialized: true
}));

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

import passportConfig from './config/passportConfig.js';
passportConfig(passport);


//custom middleware for testing user session/login status
app.use((req,res, next)=>{

    if(req.user)
    {
        console.log(req.user)
    }
  next()
})


//define all the available routes and the router that handle them
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/poi',  poiRouter);
app.use('/map',  mapRouter);

//must login to review a poi
app.use('/review', reviewRouter);
app.use('/recommendation',  recommendationRouter);


//set the route and view for our custom 404 page
app.use(function(req, res, next){
  res.status(404).render('404', {
    title: "Page not found"
  });
});

export default app;
