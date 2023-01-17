import express  from'express';
import db from '../db.js'
import ReviewDao from "../dao/reviewDao.js"
const router = express.Router();

router.post('/add', async (req, res, next) => {

    const dao = new ReviewDao(db);

    try {
        res.status(200).json(await dao.addReview(req.body));
    }catch (error) {
        res.status(500).json({error: error});
    }

});


export default router