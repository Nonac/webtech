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


/*
  validation functions
  takes in a JSON object
  returns {error, value}. if validation is successful, error is undefined
*/

// register validation
const valididateRegistration = data => registrationSchema.validate(data);
// login validation
const validateLogin = data => loginSchema.validate(data);

module.exports.validateRegistation = valididateRegistration;
module.exports.validateLogin = validateLogin;
