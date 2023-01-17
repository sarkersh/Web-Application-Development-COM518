import express  from'express';
const router = express.Router();


router.get('/', async (req, res, next) => {
    const username = (req.user) ? req.user[0].username : '';
    res.render('map-view', {
        title: 'Map View',
        username: username
    });

});

export default router;