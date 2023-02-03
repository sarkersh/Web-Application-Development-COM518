
class RecommendationDao {
    // conn is our mysql database connection
    
    constructor(db) {
        this.db = db
    }

    //add a recommendation for poi
    addRecommendation= async (poiId) => {

        let currentCount = await this.getRecommendationCount(poiId);
        let newCount = 0;
        if(currentCount.length > 0){
            newCount = currentCount[0].recommendations + 1;
        }

        return new Promise ((resolve, reject) => {
            try {
                //update table data on mysql
                this.db.query("update pointsofinterest set recommendations = ? where ID =?", [newCount, poiId], function(error, rows){
                    if(error) reject(error);
                    resolve({
                        status: "success",
                        message: "Recommendation Added Successfully",
                        recommendations: newCount
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    };

    getRecommendationCount= async (poiId) => {

        return new Promise ((resolve, reject) => {
            try {
                //search data from mysql db at poi homepage for non logged in user
                this.db.query("select recommendations from pointsofinterest where ID =?",
                    poiId,
                    function(error,results, fields){
                        if(error) reject(error);
                        resolve(results);
                    });
            } catch (error) {
                reject(error);
            }
        });
    };


}

export default RecommendationDao; // so that other code can use it

