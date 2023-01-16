import connection from "../config/dbConnection";


let findUserByUserName = (username)=>{
 return new Promise((resolve, reject) => {
     try{
         connection.connection("SELECT * from poi_users where username = ?", username, function(error, rows) {
            if(error) reject(error);
            let username = rows[0];
            resolve(username);
         });
     }catch (error) {
         reject(error);
     }
 })
};


let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query("SELECT * from poi_users where id = ?", id, function(error, rows) {
                if(error) reject(error);
                let username = rows[0];
                resolve(username);
            });
        }catch (error) {
            reject(error);
        }
    })
};

module.exports = {
    findUserByUserName: findUserByUserName,
    findUserById: findUserById
};