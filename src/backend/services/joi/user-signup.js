const Joi = require('joi');

module.exports = Joi.object({
    name:Joi.string()
    .alphanum()
    .required(),

    firstName:Joi.string
    .alphanum()
    .required(),

    mail: Joi.string()
    .pattern(/[^+-<>{}()]/)
    .email()
    .required,
    
    birthday: Joi.required(),

    password: Joi.string()
    .min(6).max(32)
    .pattern(/(?=.*[A-Z])(?=.*[0-9])/)
    .required()
})