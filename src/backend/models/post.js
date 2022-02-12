const db = require('../config/db')


class Post {
    constructor(userId, title, body) {
        this.userId = userId,
            this.title = title,
            this.body = body
    }


    save() {
        let sql = `INSERT INTO post (user_id, title, body) 
    VALUES('${this.userId}',
    '${this.title}',
    '${this.body}')`;

        return db.execute(sql);
    }


    find() {
        /* date de creation pour trier */
       
    }

}

module.exports = Post;