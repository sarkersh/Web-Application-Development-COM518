import express from "express";
import loginController from "../controllers/loginController";

import homePageController from "../controllers/homePageController";
import initPassportLocal from "../controllers/passportLocalController";

/*
init passport routes
 */
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);
    router.post("/logout", loginController.postLogOut);

   

    router.get("/login",loginController.checkLoggedOut, loginController.getLoginPage);
    router.post("/login", loginController.handleLogin);
    return app.use("/", router);
 
};

module.exports = initWebRoutes;