const db = require('../config/db')


class post {
    constructor(titre, body, likes, comment, dislikes) {
        this.titre = titre,
            this.body = body,
            this.likes = likes,
            this.comment = comment,
            this.dislikes = dislikes
    }


    save() {
        let sql = `INSERT INTO post (userId, titre, body, likes, comment, dislikes) 
    VALUES('
   '${this.userId}',
    ${this.titre}',
    ' ${this.body}',
     '${this.likes}', 
     '${this.comment}', 
     '${this.dislikes}')`;

        return db.execute(sql);
    }


    get() {
        /* date de creation pour trier */
        let sql = 'requete sql'
    }

}

module.exports = post;