const {
    createPoi,
    getAllPointOfInterests,
    recommendedPoi,
    loginUser,
    getPoiUser,
    logout,
  } = require("../controller/controllers.js");
  const express = require("express");
  const authenticateUser = require("../middleware/auth.js");
  const router = express.Router();
  
  router.route("/createPoi").post(createPoi);
  router.route("/getAllPoi").get(getAllPointOfInterests);
  router.route("/getAllPoi/:id").patch(recommendedPoi);
  router.route("/").get(authenticateUser, getPoiUser);
  router.route("/login").post(loginUser);
  router.route("/logout").get(logout);
  
  module.exports = router;
  