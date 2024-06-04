const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const createPortfolioSchema = Joi.object({
  title: Joi.string().required(),
  imageUrl: Joi.string().required(),
  videoUrl: Joi.string().required(),
  about: Joi.string().required(),
});

const validateCreatePortfolio = validateRequest(createPortfolioSchema);

module.exports = {
  validateCreatePortfolio
};
