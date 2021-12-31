const db = require('../config/db')

class User {
    constructor(name, firstName, email, birthday, password) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.birthday = birthday;
        this.password = password;
    }
    save() {
        let sql = `INSERT INTO user (nom, prenom, email, birthday, password) 
        VALUES('${this.name}',
        ' ${this.firstName}',
         '${this.email}', 
         '${this.birthday}', 
         '${this.password}')`;

        return db.execute(sql);
    }

}

module.exports = User;