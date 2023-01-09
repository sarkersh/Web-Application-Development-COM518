import connection from "../config/dbConnection";
import bcrypt from "bcryptjs";

let createNewUser = (user) => {
    return new Promise ((resolve, reject) => {
        try {
            //hasing a password using bcrypt
            let salt = bcrypt.genSaltSync(10);
            let data = {
                fullname: user.fullname,
                email: user.email,
                username: user.username,
                password: bcrypt.hashSync(user.password, salt)
            };
            //create a new user
            connection.query("INSERT INTO poi_users set ? ", data, function(error, rows){
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