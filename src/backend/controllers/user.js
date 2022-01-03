const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let user = new User({
                name: req.body.name,
                firstName: req.body.firstName,
                birthday: req.body.birthday,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'User created' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
    //return un token et le stocker dans le localstorage
    //hasher le mdp avant de l'envoyer au db
    
    /*exports.signup = async (req, res, next) => {
    let { name, firstName, email, birthday, password } = req.body
    let createUser = new User(name, firstName, email, birthday, password)

    createUser = await createUser.save()

    console.log(createUser);
    res.send("user created")*/
}

exports.login = async (req, res, next) => {
    res.send()
}

