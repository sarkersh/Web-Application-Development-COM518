const {createPoi, getAllPointOfInterests, recommendedPoi} = require("../controllers/poiControllers");

const express = require("express");

const router = express.Router();

router.route("/createPoi").post(createPoi);
router.route("/getAllPoi").get(getAllPointOfInterests);
router.route("/getAllPoi/:id").patch(recommendedPoi);

module.exports = router;