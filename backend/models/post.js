const db = require('../config/db')


class Post {
    constructor(userId, title, body, likes, nbr_comment, dislikes) {
        this.userId = userId,
            this.title = title,
            this.body = body,
            this.likes = likes,
            this.nbr_comment = nbr_comment,
            this.dislikes = dislikes
    }


    save() {
        let d = new Date();

        let DD = d.getDate();
        let MM = d.getMonth() + 1;
        let YYYY = d.getFullYear();
        let hh = d.getHours();
        let mm = d.getMinutes();
    
        let created_at = `${YYYY}-${MM}-${DD} ${hh}:${mm}`

        let sql = `INSERT INTO post (user_id, title, body, created_at, likes, nbr_comment, dislikes)
    VALUES('${this.userId}',
    "${this.title}",
    "${this.body}",
    '${created_at}',
    '${this.likes}',
    '${this.nbr_comment}',
    '${this.dislikes}')`;

        return db.execute(sql);
    }


}

module.exports = Post;