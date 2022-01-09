const express = require('express');
const mysql = require('mysql2');

// VARIABLES D'ENVIRONNEMENT
const dotenv = require('dotenv').config();

//ROUTES
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

// systeme CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// routes de connexion/inscription
app.use('/api/auth', userRoutes);

module.exports = app;