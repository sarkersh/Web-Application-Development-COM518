import express from "express";
import homePageController from "../controllers/homePageController";
import loginController from "../controllers/loginController";
import initPassportLocal from "../controllers/passportLocalController";
import registerController from "../controllers/registerController";
/*
init passport routes
 */
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);
    router.post("/logout", loginController.postLogOut);

    router.get("/register", registerController.getRegister );
    router.post("/register-new-user", registerController.createNewUser);

    router.get("/login",loginController.checkLoggedOut, loginController.getLogin);
    router.post("/login", loginController.handleLogin);
    return app.use("/", router);
};

module.exports = initWebRoutes;