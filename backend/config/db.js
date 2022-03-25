require('dotenv').config();
const mysql = require('mysql2');

// données de la base de donnée
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

const promisePool = pool.promise();
module.exports = promisePool;