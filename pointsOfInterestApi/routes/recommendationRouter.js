import express  from'express';
import db from '../db.js'
import RecommendationDao from '../dao/recommendationDao.js';
const router = express.Router();


router.get('/add/:id', async (req, res, next) => {

    const poiId = req.params.id;

    const dao = new RecommendationDao(db);
    try {
        res.status(200).json(await dao.addRecommendation(poiId));
    }catch (error) {
        res.status(500).json({error: error});
    }

});

export default router;