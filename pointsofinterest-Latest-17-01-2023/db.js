import mysql from 'mysql2';

//import and config env variables
//so they are available to mysql
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})




const conn = async () => {
    try {
        var con = await mysql.createConnection({
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PWD,
            database : process.env.DATABASE
        });

        const conn = await con.connect();
        console.log('connected to mysql ok');

        return con
    } catch(e) {
        console.error(`ERROR connecting to database: ${e}`);
        return e
    }
}

export default await conn()