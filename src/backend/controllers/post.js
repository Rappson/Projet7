const Post = require('../models/post')
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

exports.createNewPost = (req, res, next) => {
    /* recuperer l'objet du nouveau post 
    appeler la fonction save qui enregistrera le body dans la bdd 
    
    
    faire le middleware auth pour recuperer l'user id a partir du token*/
    const keyToken = req.body.token;
    const decodedToken = jwt.verify(keyToken, `${process.env.TOKEN_SECRET}`)
    const userId = decodedToken.userId;

    let post = new Post(
        userId,
        req.body.title,
        req.body.body,
        0,
        0,
        0
    )
    post.save()
        .then(() => res.status(201).json({ message: 'publication crée !' }))
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "une erreur s'est produite" })
        })
}
