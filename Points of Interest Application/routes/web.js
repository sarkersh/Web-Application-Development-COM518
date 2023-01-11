import express from "express";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.render("main.ejs");
    });

    router.get("/register", registerController.getRegister);
    router.post("/register-new-user", registerController.createNewUser);
    router.get("/login", loginController.getLogin)
    router.post("/login", loginController.handleLogin);
    return app.use("/", router);
};

module.exports = initWebRoutes;