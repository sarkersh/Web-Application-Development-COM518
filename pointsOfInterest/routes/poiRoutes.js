const {createPoi} = require("../controllers/poiControllers");

const express = require("express");

const router = express.Router();

router.route("/createPoi").post(createPoi);

module.exports = router;