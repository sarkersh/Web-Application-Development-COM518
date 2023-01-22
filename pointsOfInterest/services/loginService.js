import connection from "../config/dbConnection";
import bcrypt from "bcryptjs";




let findUserByUserName = (username) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * from poi_users where username = ?", username, function(error, rows) {
                if(error) reject(error);
                let user = rows[0];
                resolve(user);
            });
        
        } catch (error) {
            reject(error);
        }
    })
   
};


let compareUserPassword = (user, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await bcrypt.compare(password, user.password);
            if(match) resolve(true);
            else resolve("The password that you've entered is incorrect!")
        } catch (error) {
            reject(error);
        }
    })
   
};

let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * from poi_users where id = ?", id, function(error, rows) {
                if(error) reject(error);
                let user = rows[0];
                resolve(user);
            });
        
        } catch (error) {
            reject(error);
        }
    })
   
};


module.exports = {
    findUserByUserName: findUserByUserName,
    compareUserPassword: compareUserPassword,
    findUserById: findUserById
};