import mysql from 'mysql2';

//import and config env variables
//so they are available to mysql
import dotenv from 'dotenv';
dotenv.config({path: './.env'});

const conn = async () => {
    try {
        let con = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DATABASE
        });

        const conn = con.connect();
        console.log('✅ MySQL DB is connected !!!');

        return con
    } catch(e) {
        console.error(`🚫 MySQL DB is not connected !!!: ${e}`);
        return e
    }
}

export default await conn()