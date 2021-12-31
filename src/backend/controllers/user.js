const User = require('../models/user');

exports.signup = async (req, res, next) => {
    let { name, firstName, email, birthday, password } = req.body
    let createUser = new User(name, firstName, email, birthday, password)

    createUser = await createUser.save()

    console.log(createUser);
    res.send("user created")
}

exports.login = async (req, res, next) => {
    res.send()
}

