import passport from "passport";

let getLogin = (req, res) => {
  return res.render("login.ejs");
};

let handleLogin =async (req, res,next) => {
   await passport.authenticate("localLogin", function(error, username, info) {
       if (error) {
           return res.status(500).json(error);
       }
       if (!username) {
           return res.status(401).json(info.message);
       }
       req.login(username, function (err) {
           if (err) {
               return res.status(500).json(error);
           } else {
               return res.status(200).json(username);
           }
       });
   })(req, res, next);
};

let checkLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) =>{
    req.session.destroy(function(err) {
        return res.redirect("/login");
    });
};

module.exports = {
    getLogin: getLogin,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut
};