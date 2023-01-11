import passport from "passport";

const getLogin = (req, res) => {
    return res.render("login.ejs");
};

const handleLogin = (req, res, next) => {
    passport.authenticate("localLogin", function(error, user, info){
        if (error) {
            return res.status(500).json(error);
        }
        if (!user) {
            return res.status(401).json(info.message);
        }
        req.login(user, function (err) {
            if (err) {
                return res.status(500).json(error);
            } else {
                return res.status(200).json(user);
            }
        });
    })(req, res, next);
};

module.exports = {
    getLogin: getLogin,
    handleLogin: handleLogin
};