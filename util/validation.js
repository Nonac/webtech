const Joi = require('@hapi/joi');

// schemas
const registrationSchema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
  username: Joi.string().min(6).required(),
  password: Joi.string().min(6).required()
})



module.exports.validateRegistation = data => registrationSchema.validate(data);
module.exports.validateLogin = data => loginSchema.validate(data);
