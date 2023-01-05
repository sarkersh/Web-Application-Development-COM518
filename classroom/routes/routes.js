
module.exports=(app)=>{

const {searchByRegion, addPOI}=require('../controllers/controllers.js');
app.get('/search/:region', searchByRegion);
app.post('/add', addPOI);


}