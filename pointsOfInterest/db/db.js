const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql, params) {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "poi",
    });
    const [results] = await connection.execute(sql, params);
    console.log("✅ MySQL DB is connected !!!");
    return results;
  } catch (err) {
    console.log("🚫 MySQL DB is not connected !!");
    console.error("🚫", err.sqlMessage, "!!");
  }
}

module.exports = {
  query,
};
