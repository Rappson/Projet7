const Joi = require('joi');

module.exports = Joi.object({
    userId: Joi.number().required(),
    
    postId: Joi.number().required(),
    
    body: Joi.string().max(200).required(),
})