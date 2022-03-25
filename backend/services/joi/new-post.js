const Joi = require('joi');

module.exports = Joi.object({
    userId: Joi.number().required(),

    title: Joi.string().required(),
    
    body: Joi.string().max(200).required(),

    likes: Joi.number().required(),

    nbr_comment: Joi.number().required(),

    dislikes: Joi.number().required()
})