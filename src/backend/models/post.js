const db = require('../config/db')


class Post {
    constructor(userId, title, body, likes, comment, dislikes) {
        this.userId = userId,
            this.title = title,
            this.body = body,
            this.likes = likes,
            this.comment = comment,
            this.dislikes = dislikes
    }


    save() {
        let sql = `INSERT INTO post (user_id, title, body, likes, comment, dislikes) 
    VALUES('${this.userId}',
    '${this.title}',
    '${this.body}',
     '${this.likes}',
     '${this.comment}',
     '${this.dislikes}')`;

        return db.execute(sql);
    }


    find() {
        /* date de creation pour trier */
       
    }

}

module.exports = Post;