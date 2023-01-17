const {
    createPoi,
    getAllPointOfInterests,
    recommendedPoi,
    loginUser,
    getPoiUser,
    logout
  } = require("../controller/controllers.js");
  const express = require("express");
  const authenticateUser = require("../middleware/auth.js");
  const app = express.Router();
  
  app.route("/createPoi").post(createPoi);
  app.route("/getAllPoi").get(getAllPointOfInterests);
  app.route("/getAllPoi/:id").patch(recommendedPoi);
  app.route("/").get(authenticateUser, getPoiUser);
  app.route("/login").post(loginUser);
  app.route("/logout").get(logout);
  
  module.exports = app;
  