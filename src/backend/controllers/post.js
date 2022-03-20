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
    const newPostValidate = joiNewPost.validate({
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body,
        likes: 0,
        nbr_comment: 0,
        dislikes: 0
    })

    let post = new Post(
        newPostValidate.value.userId,
        newPostValidate.value.title,
        newPostValidate.value.body,
        newPostValidate.value.likes,
        newPostValidate.value.nbr_comment,
        newPostValidate.value.dislikes
    );
    if (newPostValidate.error) {
        res.status(401).json({ message: newPostValidate.error.details[ 0 ].message })
    } else {
        post.save()
            .then((response) => {
                let sql = `SELECT post.id, title, body, created_at, nom, prenom, likes, nbr_comment, dislikes, user_id
                 FROM post INNER JOIN user ON user.id = post.user_id WHERE post.id = ${response[0].insertId}`
                db.execute(sql)
                    .then((user) => {
                        res.status(200).json( user[0][0] )
                    })
                    .catch(() => res.status(500).json({message: 'Accès impossible aux données'}))
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error })
            })
    }
}


exports.getAllPosts = (req, res, next) => {
    let sql = 'SELECT post.id, title, body, created_at, nom, prenom, likes, nbr_comment, dislikes, user_id FROM post INNER JOIN user ON post.user_id = user.id order by created_at DESC;';
    return db.execute(sql)
        .then((post) => res.status(200).json(post[ 0 ]))
        .catch((error) => {
            console.log(error);
            req.status(500).json({ error })
        })
}

exports.getOnePost = (req, res, next) =>{
    let sql = `SELECT post.id, title, body, created_at, nom, prenom, likes, nbr_comment, dislikes, user_id FROM post INNER JOIN user ON post.user_id = user.id WHERE post.id = ${req.params.id}`
    return db.execute(sql)
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json(error))
}