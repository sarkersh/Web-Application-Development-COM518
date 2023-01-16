import passport from "passport";
import passportLocal from "passport-local";
import loginService from "../services/loginService";

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
    passport.use("localLogin", new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
        },
        async (username, password, done) => {
            try {
                await loginService.findUserByUserName(username).then( (username) => {
                    if (!username) return done(null, false, { message: `This user username "${username}" doesn't exist` })
                    if (username) {
                        // //compare password
                        // let match = await loginService.compareUserPassword(username, password);
                        // if (match === true) return done(null, user, null);
                        return done(null, false, { message: match });
                    }
                });

            } catch (error) {
                return done(null, false, { message: error });
            }
        }));
};

passport.serializeUser((username, done) => {
    done(null, username.id);
});

passport.deserializeUser((id, done) => {
    loginService.findUserById(id).then((username) => {
        return done(null, username);
    }).catch(error => {
        return done(error, null)
    });
});

module.exports = initPassportLocal;