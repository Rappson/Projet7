const express = require('express');
const mysql = require('mysql2');

// VARIABLES D'ENVIRONNEMENT
const dotenv = require('dotenv').config();
const env = process.env;

//ROUTES
const userRoutes = require('./routes/user');


exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${process.env.DATABASE_PASS}`,
    database: 'groupomania'
  });

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// EXEMPLE DE REQUETE

/* connection.query(
    'SELECT * FROM user',
    function(err, result, fields){
        console.log(result);
    }
)
 */

app.use('/api/users', userRoutes);

module.exports = app;