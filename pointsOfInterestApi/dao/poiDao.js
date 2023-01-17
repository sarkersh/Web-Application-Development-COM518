
class PoiDao {
    // conn is our mysql database connection
    // table is the table storing the students

    constructor(db) {
        this.db = db
    }

    addPointOfInterest = async (pointOfInterest) => {

        return new Promise ((resolve, reject) => {
            try {
                //create a new user
                this.db.query("INSERT INTO pointsofinterest set ? ", pointOfInterest, function(error, rows){
                    if(error) reject(error);
                    resolve("Poit of Interest Added Successfully");
                });
            } catch (error) {
                reject(error);
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