import express  from'express';
import passport from "passport";
const router  = express.Router();
import {isLoggedOut} from '../config/passportConfig.js';

router.get('/login', isLoggedOut, async (req, res, next) => {
    const username = (req.user) ? req.user[0].username : "";
    res.render('login', {
        title: 'Login',
        username
    });

});

router.post('/login',

    passport.authenticate('local'),

    (req, res) => {

        try {
            res.status(200).json({
                status: 'success',
                message: 'Login Successful'
            });
        }catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            });
        }

    }
);

router.get('/logout', async (req, res, next) => {

    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });

});

export default router;
