const db = require('../config/db')

class User {
    // schema user
    constructor(name, firstName, email, birthday, password) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.birthday = birthday;
        this.password = password;
    }

    /* fonction sql :
    sauvegarder un nouveau utilisateur */
    save() {
        let sql = `INSERT INTO user (nom, prenom, email, birthday, password) 
        VALUES('${this.name}',
        ' ${this.firstName}',
         '${this.email}', 
         '${this.birthday}', 
         '${this.password}')`;

        return db.execute(sql);
    }
/* fonction sql : 
verifier si les données renseignées pas l'utilisateur correspondent à une donnée dans la BDD */
    connect(){
        let sql = `select * from user where email = ${this.email}`
    }

}

module.exports = User;