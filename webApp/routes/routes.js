



module.exports = (app) => {
  const {
    createPoi,
    getAllPointOfInterests,
    recommendedPoi,
    loginUser,
    getPoiUser,
    logout,
    registerUser
  } = require("../controllers/controllers.js");
  const express = require("express");
  const authenticateUser = require("../routes/auth.js");

  //const router = express.Router();
  app.post("/createPoi", createPoi);
  app.get("/getAllPoi", getAllPointOfInterests);
  app.patch("/getAllPoi/:id", recommendedPoi);
  app.post("/", authenticateUser, getPoiUser);
  app.post("/login", loginUser);
  app.post("/register", registerUser)
  app.get("/logout", logout);
}
