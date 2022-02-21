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

        let DD = d.getDate();
        let MM = d.getMonth() + 1;
        let YYYY = d.getFullYear();
        let hh = d.getHours();
        let mm = d.getMinutes();
    
        let created_at = `${YYYY}-${MM}-${DD} ${hh}:${mm}`

        let sql = `INSERT INTO post (user_id, title, body, created_at) 
    VALUES('${this.userId}',
    '${this.title}',
    '${this.body}',
    '${created_at}')`;

        return db.execute(sql);
    }


    find() {
        /* date de creation pour trier */

    }

}

module.exports = Post;