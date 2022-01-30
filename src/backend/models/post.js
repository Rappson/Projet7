const db = require('../config/db')


class post {
constructor(titre, body, likes, comment, dislikes){
    this.titre = titre,
    this.body = body,
    this.likes = likes,
    this.comment = comment,
    this.dislikes = dislikes
}


save(){
    let sql = `INSERT INTO post (titre, body, likes, comment, dislikes) 
    VALUES('${this.titre}',
    ' ${this.body}',
     '${this.likes}', 
     '${this.comment}', 
     '${this.dislikes}')`;

    return db.execute(sql);
}


get(){
    let sql = 'requete sql'
}

}

module.exports = post;