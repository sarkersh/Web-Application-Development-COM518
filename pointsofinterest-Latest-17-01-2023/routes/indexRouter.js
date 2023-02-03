import express  from'express';
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {

  const username = (req.user) ? req.user[0] : "";
  console.log('USERNAME :: ', username);

  res.render('index', {
    title: 'Home',
    username
  });

});

export default router;