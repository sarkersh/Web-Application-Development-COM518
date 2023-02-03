
class PoiDao {
    // conn is our mysql database connection
   

    constructor(db) {
        this.db = db
    }

    addPointOfInterest = async (pointOfInterest) => {

        return new Promise ((resolve, reject) => {
            try {
                //adding poi to mysql db for logged in user only
                this.db.query("INSERT INTO pointsofinterest set ? ", pointOfInterest, function(error, rows){
                    if(error) reject(error);
                    resolve({
                        status: "success",
                        message: "Point of Interest Added Successfully"
                    });
                });
            } catch (error) {
                reject(
                    {
                        status: "error",
                        message: "Your POI could not be added. Please make sure you are logged in"
                    });
            }
        });
    };

    getPointsOfInterest = async (region='all') => {

        return new Promise ((resolve, reject) => {
            try {

                this.db.query('SELECT * FROM pointsofinterest where region = ?',
                    [region],
                    (err, results, fields) => {
                        //if error reject with the error message
                        if(err) reject(err);

                        //if no error, resolve the results
                        resolve(results);
                    });

            }catch(error) {
                reject(error);
            }

        });
    };


}

export default PoiDao;