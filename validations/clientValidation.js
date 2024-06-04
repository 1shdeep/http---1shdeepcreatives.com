const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const createClientSchema = Joi.object({
  logoUrl: Joi.string().required()
});

const validateCreateClient = validateRequest(createClientSchema);

module.exports = {
  validateCreateClient
};
