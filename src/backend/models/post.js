const db = require('../config/db')


class Post {
    constructor(userId, title, body, created_at) {
        this.userId = userId,
            this.title = title,
            this.body = body,
            this.created_at = created_at
    }


    save() {
        let sql = `INSERT INTO post (user_id, title, body, created_at) 
    VALUES('${this.userId}',
    '${this.title}',
    '${this.body}',
    '${this.created_at}')`;

        return db.execute(sql);
    }


    find() {
        /* date de creation pour trier */
       
    }

}

module.exports = Post;