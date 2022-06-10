const Post = require('../models/post')
const Comment = require('../models/comment')
const db = require('../config/db');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

// SERVICES
const Joi = require('joi');
const joiNewPost = require('../services/joi/new-post');
const joiNewComment = require('../services/joi/new-comment')
const likes = require('../services/likes')

//POST
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
                res.status(500).json({ error })
            })
    }
}

exports.createNewComment = (req, res, next) => {
    const newCommentValidate = joiNewComment.validate({
        userId: req.body.userId,
        postId: req.body.postId,
        body: req.body.body
    })

    let comment = new Comment(
        newCommentValidate.value.userId,
        newCommentValidate.value.postId,
        newCommentValidate.value.body
    )

    if (newCommentValidate.error) {
        res.status(401).json({ message: newCommentValidate.error.details[ 0 ].message })
    } else {
        comment.save()
            .then((response) => {
                let sql = `SELECT comments.id, user_id, post_id, body, created_at, nom, prenom FROM comments INNER JOIN user ON user.id = comments.user_id WHERE post_id = ${newCommentValidate.value.postId} `
                db.execute(sql)
                    .then((comments) => {
                        res.status(200).json(comments[ 0 ])
                    })
                    .catch((err) => {
                        res.status(500).json(err)
                    })
            })
            .catch((err) => {
                res.status(404).json(err)
            })
    }
}

exports.likes = async (req, res, next) => {
    likes.deleteLikes(req)
        .then(() => {
            let sql = `INSERT INTO likes (user_id, likeData, post_id)
        VALUES ("${req.body.userId}",
           "${req.body.like}",
           "${req.body.post_id}")`

            db.execute(sql)
                .then(async () => {
                    await likes.likeCount(req.body.post_id)
                    await likes.dislikeCount(req.body.post_id)

                    let sql = `SELECT * FROM post WHERE id = ${req.body.post_id}`

                    try {
                        let post = await db.execute(sql)
                        let isLiked = await likes.alreadyLiked(req.body.userId, req.body.post_id)

                        post[ 0 ][ 0 ].isLiked = isLiked

                        res.status(201).json(post[ 0 ][ 0 ])
                    } catch {
                        res.status(404).json('impossible de récuperer le post')
                    }
                }) // FIN DU THEN
                .catch((error) => res.status(400).json(error))
        })
        .catch((err) => {
            res.status(404).json(err)

        })
}
//GET
exports.getAllPosts = (req, res, next) => {
    let sql = 'SELECT post.id, title, body, created_at, nom, prenom, likes, nbr_comment, dislikes, user_id FROM post INNER JOIN user ON post.user_id = user.id order by created_at DESC;';
    return db.execute(sql)
        .then((post) => res.status(200).json(post[ 0 ]))
        .catch((error) => {
            req.status(500).json({ error })
        })
}

exports.getOnePost = async (req, res, next) => {
    likes.likeCount(req.params.id)
    likes.dislikeCount(req.params.id)

    likes.alreadyLiked(req.body.userId, req.params.id)
        .then((likedData) => {
            let sql = `SELECT post.id, title, body, created_at, nom, prenom,
     (select count(*) from likes WHERE post_id = ${req.params.id} AND likeData = 1) AS likes, nbr_comment,
      (select count(*) from likes WHERE post_id = ${req.params.id} AND likeData = -1) AS dislikes,
      user_id FROM post INNER JOIN user ON post.user_id = user.id WHERE post.id = ${req.params.id}`
            
            return db.execute(sql)
                .then((post) => {
                    if (post[ 0 ][ 0 ].user_id === req.body.userId) {
                        post[ 0 ][ 0 ].isOwned = true
                    } else {
                        post[ 0 ][ 0 ].isOwned = false
                    }
                    post[ 0 ][ 0 ].isLiked = likedData
                    res.status(200).json(post[ 0 ][ 0 ])
                })
                .catch((error) => res.status(404).json(error))
        })
}

exports.getAllComments = (req, res, next) => {
    let sql = `SELECT comments.id, user_id, post_id, body, created_at, nom, prenom FROM comments INNER JOIN user ON user.id = comments.user_id WHERE post_id = ${req.params.id}`
    return db.execute(sql)
        .then((response) => {
            let i = 0;
            while (i < response[ 0 ].length) {
                if (req.body.userId === response[ 0 ][ i ].user_id) {
                    response[ 0 ][ i ].isOwned = true
                } else {
                    response[ 0 ][ i ].isOwned = false
                }
                i++
            }

            response[ 0 ].nbr_comment = response[ 0 ].length
            res.status(200).json(response[ 0 ])
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json(err)
        })
}

//DELETE
exports.deletePost = (req, res, next) => {
    let sql = `DELETE FROM post WHERE id = ${req.params.id};`
    return db.execute(sql)
        .then((item) => res.status(200).json(item))
        .catch((error) => res.status(400).json(error))
}

exports.deleteComment = (req, res, next) => {
    let sql = `DELETE FROM comments WHERE id = ${req.params.id}`

    return db.execute(sql)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}