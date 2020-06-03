const Joi = require('@hapi/joi');

// schemas
const registrationSchema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

const saveCvSchema = Joi.object({
  templateId: Joi.number().required(),
  htmlHeaders: Joi.string().required(),
  cvContents: Joi.string().required(),
  avatarUrl: Joi.string().required()
})



module.exports.validateRegistation = data => registrationSchema.validate(data);
module.exports.validateLogin = data => loginSchema.validate(data);
module.exports.validateSaveCv = data => saveCvSchema.validate(data);
