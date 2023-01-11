import passport from "passport";
import passportLocal from "passport-local";
import loginService from "../services/loginService";

const localStrategy = passportLocal.Strategy;

const initPassportLocal = () => {
    passport.use("localLogin", new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }),
        async (email, password, done) => {
            try {
                await loginService.findUserByEmail(email).then(async (user) => {
                    if(!user) return done(null, false, {message: `Email $(email) dosen't exist!`})
                    if (user) {
                        //compare password
                        const match = await loginService.compareUserPassword(user, password);
                        if (match === true) return done(null, user, null);
                        return done(null, false, { message: match });
                    }
                });
                
            } catch (e) {
                return done(null, false, {message:e});
            }
        });
};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    loginService.findUserById(id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});

module.exports = initPassportLocal;