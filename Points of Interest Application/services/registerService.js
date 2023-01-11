import bcrypt from "bcryptjs";
import connection from "../config/dbConnection";

const createNewUser = (user) => {
    return new Promise (async (resolve, reject) => {
        try {
            const verify = await verifyEmailAddress(user.email);
            if(verify === false) {
                //hasing a password using bcryptjs
                const salt = bcrypt.genSaltSync(10);
                const data = {
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
                }
                if(verify === true)
                reject(`Email address ${user.email} has existed. Try with another email address`);
            } catch (error) {
                reject(error);
            }
        });
    };

const verifyEmailAddress = (email) => {
    return new Promise((resolve, reject) => {
        try {
        connection.query("SELECT * from poi_users where email = ?", email, function (error, rows) {
            if(error) reject(error);
            if(rows.length > 0) resolve(true);
            resolve(false);          
        })
    } catch (error) {
        reject(error);
    }
}) ;
};
    
module.exports = {
    createNewUser: createNewUser
}