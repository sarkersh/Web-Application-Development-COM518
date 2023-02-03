import express  from'express';
import db from '../db.js'
import ReviewDao from "../dao/reviewDao.js"
const router = express.Router();

router.post('/add', async (req, res, next) => {

    const data = req.body;
    if(data.review == ''){
        return res.status(400).json({
            status: "error",
            message: "Review field cannot be left blank"
        })
    }

    if(!req.user){
        return res.send({
            status: "error",
            message: "Your review could not be added. Please make sure you are logged in"
        });
    }

    const dao = new ReviewDao(db);
    try {
        res.status(200).json(await dao.addReview(req.body));
    }catch (error) {
        res.send({
            status: "error",
            message: "Your review could not be added. Please make sure you are logged in"
        });
    }

});


export default router