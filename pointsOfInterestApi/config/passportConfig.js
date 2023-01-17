//import passport from "passport";
import db from "../db.js";
import LocalStrategy from "passport-local";


const initPassport = (passport) => {

    passport.use(new LocalStrategy(function (username, password, done) {

        //note: username and password are auto picked from req.body
        // check if the user exists
        db.query('SELECT * FROM poi_users WHERE username=? AND password=?',
            [username, password],
            (err, user, fields) => {
                if(err) {  return done(err) };

                if(!user || user == null) {
                    return done(null, false, { message: 'Incorrect username or password.' });
                }

                return done(null, user);

            });

    }));

    passport.serializeUser( (userDetail, done) => {
        if(userDetail.length > 0){
            done(null, userDetail[0].id);
        }
    });

    passport.deserializeUser( (id, done) =>{
        const userDetails = db.query('SELECT * FROM poi_users WHERE id=?',
            [id],
            (err, user, fields) => {
                if(err) {  return done(err) };
                if(!user) { return done(null, false, { message: 'Incorrect username or password.' }); }

                return done(null, user);
            });
    });

}

export const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    return res.redirect('/users/Login');
}

export const isLoggedOut = (req, res, next) => {
    if (!req.isAuthenticated()) return next();
    return res.redirect('/');
}

export default initPassport;