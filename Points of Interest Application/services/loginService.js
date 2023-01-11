import connection from "../config/dbConnection";



const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query("SELECT * from poi_users where email = ?", email, function(error, rows) {
               if(error) reject(error);
               const user = rows[0];
               resolve(user);
            });
        }catch (e) {
            reject(e);
        }
    });
};

const compareUserPassword = (user, password) => {
    return new Promise(async (resolve, reject) => {
        try{
            const match = await bcrypt.compare(password, user.password)
            if(match) resolve(true);
            else resolve("Incoorect Password!");
           
        }catch (e) {
            reject(e);
        }
    });
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try{
            connection.query("SELECT * from poi_users where id = ?", id, function(error, rows) {
               if(error) reject(error);
               let user = rows[0];
               resolve(user);
            });
        }catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    findUserByEmail: findUserByEmail,
    compareUserPassword: compareUserPassword,
    findUserById: findUserById
};