class ReviewDao {
    
    constructor(db) {
        this.db = db
    }

    addReview = async (reviewData) => {
        console.log('Review Added Successfully', reviewData)


        return new Promise ((resolve, reject) => {
            try {
                //adding review to the db
                this.db.query("INSERT INTO poi_reviews set ? ", reviewData, function(error, rows){
                    if(error) reject(error);
                    resolve({
                        status: "success",
                        message: "Review Added Successfully"
                    });
                });
            } catch (error) {
                reject(error);
            }
        });
    };


}

export default ReviewDao;