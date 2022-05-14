const Post = require('../models/post')
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

// SERVICES
const Joi = require('joi');
const joiNewPost = require('../services/joi/new-post');
const likes = require('../services/likes')

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
                 FROM post INNER JOIN user ON user.id = post.user_id WHERE post.id = ${response[ 0 ].insertId}`
                db.execute(sql)
                    .then((user) => {
                        res.status(200).json(user[ 0 ][ 0 ])
                    })
                    .catch(() => res.status(500).json({ message: 'Accès impossible aux données' }))
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

exports.getOnePost = async (req, res, next) => {
    likes.likeCount(req.params.id)
    likes.dislikeCount(req.params.id)

    likes.alreadyLiked(req)
        .then((likedData) => {
            let sql = `SELECT post.id, title, body, created_at, nom, prenom,
     (select count(*) from likes WHERE post_id = ${req.params.id} AND likeData = 1) AS likes, nbr_comment,
      (select count(*) from likes WHERE post_id = ${req.params.id} AND likeData = -1) AS dislikes,
      user_id FROM post INNER JOIN user ON post.user_id = user.id WHERE post.id = ${req.params.id}`
            console.log(likedData);
            /* faire la gestion du retour de la fonction alreadyLiked:
            SI le retour est une valeur recuperer la valeur et la renvoyer dans la reponse (res)
            SINON renvoyer false a la response */
            return db.execute(sql)
                .then((post) => {
                    post[ 0 ][ 0 ].isLiked = likedData
                    res.status(200).json(post[ 0 ][ 0 ])
                })
                .catch((error) => res.status(404).json(error))
        })
}

exports.deletePost = (req, res, next) => {
    let sql = `DELETE FROM post WHERE id = ${req.params.id};`
    return db.execute(sql)
        .then((item) => res.status(200).json(item))
        .catch((error) => res.status(400).json(error))
}

exports.likes = async (req, res, next) => {
    /* 
    j'envoie les données dans la table likes
    je fais la liaison des tables : post et likes pour mettre a jour les likes dans la table post
    et je retourne la table post
      */

    await likes.deleteLikes(req)
        .then(() => {
            let sql = `INSERT INTO likes (user_id, likeData, post_id)
        VALUES ("${req.body.userId}",
           "${req.body.like}",
           "${req.body.post_id}")`

            db.execute(sql)
                .then(async () => {
                    let likeObject = {};
                    let like = await likes.likeCount(req.body.post_id)
                    let dislike = await likes.dislikeCount(req.body.post_id)

                    let sql = `SELECT * FROM post WHERE id = ${req.body.post_id}`

                    let post = await db.execute(sql)
                    try {
                        console.log(post[ 0 ][ 0 ]);
                        /* let isLiked = await likes.alreadyLiked(req)
                        console.log(isLiked);
    
                        post[ 0 ][ 0 ].isLiked = isLiked */

                        res.status(201).json(post[ 0 ][ 0 ])
                    } catch {
                        res.status(404).json('impossible de récuperer le post')
                    }
                }) // FIN DU THEN
                .catch((error) => res.status(400).json(error))
        })
        .catch((err) => {
            console.log(err);
        })
}