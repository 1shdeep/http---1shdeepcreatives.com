const express = require('express');
const router = express.Router();
const PortfolioController  = require('../controllers/portfolioController');
const { validateCreatePortfolio } = require('../validations/portfolioValidation');

// Create a stock adjustment

router.post('/', validateCreatePortfolio, PortfolioController.createPortfolio);

// Get a single Portfolio or All
router.get('/', PortfolioController.getPortfolioByIdOrAll);

// Delete a Portfolio by ID
router.delete('/:id', PortfolioController.deletePortfolio);

module.exports = router;
