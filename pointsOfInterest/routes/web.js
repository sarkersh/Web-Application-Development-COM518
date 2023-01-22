import express from "express";
import loginController from "../controllers/loginController";
import initPassportLocal from "../controllers/passportLocalController";

/*
init passport routes
 */
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.render("homepage.ejs");
    });
    router.get("/login", loginController.getLoginPage);
    router.post("/login", loginController.handleLogin);

    router.get('*', (req, res) => {
        return res.render('404.ejs');
    });
    
    return app.use("/", router);
};

module.exports = initWebRoutes;