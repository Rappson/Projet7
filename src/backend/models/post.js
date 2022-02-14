const { date } = require('joi');
const db = require('../config/db')


class Post {
    constructor(userId, title, body) {
        this.userId = userId,
            this.title = title,
            this.body = body
    }


    save() {
        let d = new Date();
        let dd = d.getDate();
        let mm = d.getMonth() + 1;
        let yyyy = d.getFullYear();

        let createdAtDate = `${dd}-${mm}-${yyyy}`
        let usDate = `${yyyy}-${mm}-${dd}`

        let sql = `INSERT INTO post (user_id, title, body, created_at) 
    VALUES('${this.userId}',
    '${this.title}',
    '${this.body}',
    '${usDate}')`;

        return db.execute(sql);
    }


    find() {
        /* date de creation pour trier */

    }

}

module.exports = Post;