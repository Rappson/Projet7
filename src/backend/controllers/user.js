const User = require('../models/user');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* SERVICES */
const Joi = require('joi');
const joiConnect = require('../services/joi/user-connect')
const joiSignup = require('../services/joi/user-signup');

exports.signup = (req, res, next) => {
    const logValidate = joiSignup.validate({
        name : req.body.name,
        firstName : req.body.firstName,
        email : req.body.email,
        birthday : req.body.birthday,
        password : req.body.password
    })
    // recuperation des données utilisateur et hashage du mdp
    bcrypt.hash(logValidate.value.password, 10)
        .then(hash => {
            // creation d'un nouveau utilisateur
            let user = new User(
                logValidate.value.name,
                logValidate.value.firstName,
                logValidate.value.email,
                logValidate.value.birthday,
                hash
            );
            if(logValidate.error){
                res.status(401).json({ message : logValidate.error.details[0].message })
            } else{
                // sauvegarde du nouvel utilisateur dans la base de donnée
                user.save()
                .then(() => res.status(201).json({ message: 'User created' }))
                .catch(error => {
                    console.log(error);
                    res.status(400).json({ error })
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })

}

exports.login = (req, res, next) => {

/* FAIRE LA VALIDATION DE DONNEES JOI */
const logValidate = joiConnect.validate({
    email : req.body.email,
    password : req.body.password
})

    let sql = `select * from user where email = '${logValidate.value.email}'`;
    db.execute(sql)
        .then(([ rows ]) => {
            const user = rows[ 0 ]
            let userPassword = user.password;

            /* SI aucun utilisateur n'a été trouvé */
            if (!user) {
                console.log("probleme dans l'email");
                return res.status(401).json({ error: 'email incorrect !' });
            }

            /* SINON comparer les deux mdp */
            bcrypt.compare(logValidate.value.password, userPassword)
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
            res.status(500).json({ error: "  introuvable !" })
        })
}

