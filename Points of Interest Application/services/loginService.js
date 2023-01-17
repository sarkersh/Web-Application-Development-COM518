let  connection = require("../config/dbConnection");
import bcrypt from "bcryptjs";

let findUserByUserName = (user)=>{
 return new Promise((resolve, reject) => {
     try{
         connection.query("SELECT * from poi_users where username = ?", user, function(error, rows) {
            if(error) reject(error);
            let user = rows[0];
            resolve(user);
         });
     }catch (error) {
         reject(error);
     }
 })
};

let compareUserPassword =  (user, password)=>{
    return new Promise(async (resolve, reject) => {
        try{
            let match = await bcrypt.compare(password, user.password);
            if(match) resolve(true);
            else resolve("The password that you've entered is incorrect")
        }catch (e) {
            reject(e);
        }
    })
};



let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query("SELECT * from poi_users where id = ?", id, function(error, rows) {
                if(error) reject(error);
                let user = rows[0];
                resolve(user);
            });
        }catch (error) {
            reject(error);
        }
    })
};

module.exports = {
    findUserByUserName: findUserByUserName,
    compareUserPassword: compareUserPassword,
    findUserById: findUserById
};