import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.render("homepage.ejs");
    });
    router.get("/login", (req, res) => {
        return res.render("login.ejs");
    });
    return app.use("/", router);
};

module.exports = initWebRoutes;