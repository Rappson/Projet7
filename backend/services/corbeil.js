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

                    let sql = `SELECT likes, dislikes FROM post WHERE id = ${req.body.post_id}`

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