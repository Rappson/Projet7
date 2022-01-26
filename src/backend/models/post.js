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
    let sql = 'requete sql'
}


get(){
    let sql = 'requete sql'

}

}

module.exports = post;