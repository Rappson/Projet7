const Post = require('../models/post')
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

// SERVICES
const Joi = require('joi');
const joiNewPost = require('../services/joi/new-post');

exports.createNewPost = (req, res, next) => {
    /* FAIRE la colomne "date de creation" dans post BDD
    
    
    comment sauvegarder les commentaires?
    dans post, enregister les id des commentaires OU

    enregistrer le nombres de commentaires et ensuite le répertorier dans des tables liées MAIS si il n'y a aucun commentaires comment faire? OU

    faire une liste des utilisateurs qui ont commenter
    
    */


    /* FAIRE LES VALEURS PAR DEFAUT (LIKES, DISLIKES, COMMENT) 
    
    direct dans la column bdd*/
    const newPostValidate = joiNewPost.validate({
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body
    })
    
    let post = new Post(
        newPostValidate.value.userId,
        newPostValidate.value.title,
        newPostValidate.value.body
    );
    if (newPostValidate.error) {
        res.status(401).json({ message: newPostValidate.error.details[0].message })
    } else {
        post.save()
            .then(() => res.status(201).json({ message: 'publication crée !' }))
            .catch((error) => {
                console.log(error);
                res.status(500).json({ message: "une erreur s'est produite" })
            })
    }
}


exports.getAllPosts = (req, res, next) => {
    let sql = 'SELECT * FROM post';
    return db.execute(sql)
        .then((post) => {
            res.status(200).json(post[0])
        })
        .catch((error) => {
            console.log(error);
            req.status(500).json({ error })
        })
}