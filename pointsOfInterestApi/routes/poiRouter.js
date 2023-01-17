import express  from'express';
import db from '../db.js'
import PoiDao from '../dao/poiDao.js';
const router = express.Router();
import {isLoggedIn} from '../config/passportConfig.js';

/* GET home page. */
router.get('/add', isLoggedIn, async (req, res, next) => {
    const username = (req.user) ? req.user[0].username : '';
    res.render('add-poi', {
        title: 'Add POI',
        username: username
    });

});

/* Api to get poi by region */
router.get('/:region', async (req, res, next) => {

    const dao = new PoiDao(db);
    try {
        res.send(await dao.getPointsOfInterest(req.params.region));
    }catch (error) {
        res.status(500).json({error: error});
    }

});

/* Api to add poi */
router.post('/', isLoggedIn, async (req, res, next) => {

    const dao = new PoiDao(db);
    const poiData = req.body;


    try {
        res.status(200).json(await dao.addPointOfInterest(poiData));
    }catch (error) {
        res.status(500).json({error: error});
    }

});

export default router;