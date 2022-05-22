const db = require('../config/db');

exports.deleteLikes = async (req) => {
    // delete les likes pour eviter les doublons
    let sql = `delete from likes where user_id = ${req.body.userId} AND post_id = ${req.body.post_id}`
    return db.execute(sql)
};

exports.alreadyLiked = async (userId, postId) => {
    let sql = `SELECT * FROM likes WHERE user_id = ${userId} AND post_id = ${postId}`
    let isLiked = await db.execute(sql)
    try {
        return isLiked[ 0 ][ 0 ].likeData
    } catch {
        return 0
    }
}

exports.likeCount = async (postId) => {
    let nbrLikes = `SELECT COUNT(*) AS nbrLikes FROM likes where post_id = ${postId} AND likeData = 1`

    try {
        const response = await db.execute(nbrLikes)
        let countNbrLikes = response[ 0 ][ 0 ].nbrLikes;
        let sql = `UPDATE post SET likes = ${countNbrLikes} where id = ${postId}`
        return db.execute(sql)
    } catch (error) {
        console.log(error);
    }
}

exports.dislikeCount = async (postId) => {
    let nbrDislikes = `SELECT COUNT(*) AS nbrDislikes FROM likes where post_id = ${postId} AND likeData = -1`

    try {
        const response = await db.execute(nbrDislikes)
        let countNbrDislikes = response[ 0 ][ 0 ].nbrDislikes

        let sql = `UPDATE post SET dislikes = ${countNbrDislikes} where id = ${postId}`
        return db.execute(sql)
    } catch (error) {
        console.log(error);
    }
}