const dotenv = require('dotenv').config()

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
        const userId = decodedToken.userId;
        // req.body.onlineUser = userId
        // console.log(req.body.onlineUser);
        
        req.body.userId = userId
        next()

       /*  if(req.body.userId && req.body.userId !== userId){
            throw 'Invalid user ID';
        } else {
            
            next();
        } */
        
    } catch{
        res.status(401).json({
            error: new Error ('Invalid request !')
        });
    }
};