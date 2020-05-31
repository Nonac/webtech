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

const avatarUploadSchema = Joi.object({
  data: Joi.required(),
  format: Joi.string().required()
})


/*
  validation functions
  takes in a JSON object
  returns {error, value}. if validation is successful, error is undefined
*/


module.exports.validateRegistation = data => registrationSchema.validate(data);
module.exports.validateLogin = data => loginSchema.validate(data);
module.exports.validateAvatarUpload = data => avatarUploadSchema.validate(data);
