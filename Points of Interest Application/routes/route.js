import express from "express";
import registerController from "../controllers/register";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.render("main.ejs");
    });

    router.get("/register", registerController.getRegister);
    return app.use("/", router);
};

module.exports = initWebRoutes;