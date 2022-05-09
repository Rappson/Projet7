const db = require('../config/db');

exports.deleteLikes = async (req) => {
    // delete les likes pour eviter les doublons
    let sql = `delete from likes where user_id = ${req.body.userId} AND post_id = ${req.body.post_id}`
    return db.execute(sql)
};

exports.alreadyLiked = async (req) => {
    let sql = `SELECT * FROM likes WHERE user_id = ${req.body.userId} AND post_id = ${req.params.id}`
    let isLiked = await db.execute(sql)
    try {
        return isLiked[ 0 ][ 0 ].likeData
    } catch {
        return 0
    }
}

exports.likeCount = async (req) => {
    let nbrLikes = `SELECT COUNT(*) AS nbrLikes FROM likes where post_id = ${req.body.post_id} AND likeData = 1`
    // let testgrouppby = `SELECT likeData, COUNT(*) AS nbrLike FROM likes where post_id = ${req.body.post_id} GROUP BY likeData`

    db.execute(`${nbrLikes}`)
        .then((response) => {
            console.log(response[0][0].nbrLikes);
            let countNbrLikes = response[0][0].nbrLikes;
            /* UPDATE `groupomania`.`post` SET `likes` = '5' WHERE (`id` = '1'); */
            let sql = `UPDATE post SET likes = ${countNbrLikes} where id = ${req.body.post_id}`

        })
        .catch((error) => console.log(error))
}