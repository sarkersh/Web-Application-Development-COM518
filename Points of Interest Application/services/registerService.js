import connection from "../config/dbConnection";

let createNewUser = (user) => {
    return new Promise ((resolve, reject) => {
        try {
            connection.query("INSERT INTO poi_users set ? ", user, function(error, rows){
                if(error) reject(error);
                resolve("Successfully User Createed");      
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser
}