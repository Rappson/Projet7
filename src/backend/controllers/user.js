const User = require('../models/user');
const db = require('../config/db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    // recuperation des données utilisateur et hashage du mdp
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // creation d'un nouveau utilisateur
            let user = new User(
                req.body.name,
                req.body.firstName,
                req.body.email,
                req.body.birthday,
                hash
            );

            // sauvegarde du nouveau utilisateur dans la base de donnée
            user.save()

                .then(() => res.status(201).json({ message: 'User created' }))
                .catch(error => {
                    console.log(error);
                    res.status(400).json({ error })
                })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })

    //return un token et le stocker dans le localstorage
}

exports.login = (req, res, next) => {
    /* findOne va recuperer le body que l'utilisateur a indiquer dans les champs connect 
    et FO va envoyer les données au BDD,
    avec bcrypt on va comparer les données  */


    let sql = `select * from user where email = '${req.body.email}'`;
    db.execute(sql)
        .then(([ rows ]) => {
            const user = rows[ 0 ]

            /* SI aucun utilisateur n'a été trouvé */
            if (!user) {
                console.log("probleme dans l'email");
                return res.status(401).json({ error: 'email incorrect !' });
            }

            /* SINON comparer les deux mdp */
            let userPassword = user.password;
            bcrypt.compare(req.body.password, userPassword)
                .then(valid => {

                    /* SI le mdp n'est pas valide */
                    if (!valid) {
                        console.log("probleme dans le mot de passe");
                        return res.status(401).json({ error: 'mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            `${process.env.TOKEN_SECRET}`,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({ error })
                })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error : "serveur introuvable !" })
        })
}

