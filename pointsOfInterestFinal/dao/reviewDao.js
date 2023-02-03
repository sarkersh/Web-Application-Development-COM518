class ReviewDao {
    
    constructor(db) {
        this.db = db
    }

    addReview = async (reviewData) => {
        console.log('ooooooooooooooooooooo', reviewData)


        return new Promise ((resolve, reject) => {
            try {
                //create a new user
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