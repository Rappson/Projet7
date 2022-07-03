const dotenv = require('dotenv').config()
const db = require('../config/db');

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
        const userId = decodedToken.userId;

        req.body.userId = userId

        let sql = `SELECT * FROM user WHERE id = ${userId}`
        db.execute(sql)
            .then((response) => {
                if (response[ 0 ][ 0 ].admin === 1) {
                    req.body.admin = true;
                } else {
                    req.body.admin = false;
                };
            })
            .catch((err) => {
                res.satus(404).json({
                    message: 'user not found !',
                    error: err
                })
            });
        next()

    } catch {
        res.status(401).json({
            error: new Error('Invalid request !')
        });
    }
};