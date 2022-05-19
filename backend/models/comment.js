const db = require('../config/db')

class Comment {
    constructor(userId, postId, body){
        this.userId = userId,
        this.postId = postId,
        this.body = body
    }

    save(){
        let d = new Date();

        let DD = d.getDate();
        let MM = d.getMonth();
        let YYYY = d.getFullYear();
        let hh = d.getHours()
        let mm = d.getMinutes();

        let created_at = `${YYYY}-${MM}-${DD} ${hh}:${mm}`

        let sql = `INSERT INTO comment (user_id, post_id, body, created_at) 
        VALUES(
            "${this.userId}",
            "${this.postId}",
            "${this.body}",
            "${created_at}"
        )`;
        return db.execute(sql);
    }
}

module.exports = Comment;