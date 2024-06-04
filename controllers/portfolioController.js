const Portfolio = require('../models/portfolio');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');

// Create a new Portfolio
const createPortfolio = async (req, res) => {
  try {
    const { title, imageUrl, videoUrl, about } = req.body;

    const portfolio = new Portfolio({ title, imageUrl, videoUrl, about });
    await portfolio.save();

    return sendSuccessResponse(res, 'Portfolio created successfully', portfolio, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get all PortfolioId or a single Portfolio by PortfolioId
const getPortfolioByIdOrAll = async (req, res) => {
  try {
    const { portfolioId } = req.query;

    if (portfolioId) {
      const portfolio = await Portfolio.findOne({ _id: portfolioId }).exec();
      if (!portfolio) {
        return sendFailureResponse(res, 'Portfolio not found', 404);
      }
      return sendSuccessResponse(res, 'Portfolio retrieved successfully', portfolio);
    } else {
      const portfolio = await Portfolio.find().sort({ createdAt: -1 }).exec();
      return sendSuccessResponse(res, 'Portfolio retrieved successfully', portfolio);
    }
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// // Edit a product by ID
// const editProduct = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const { name, sku, qty, price } = req.body;

//     // Find the product by ID and update its properties
//     const product = await Product.findByIdAndUpdate(
//       productId,
//       { name, sku, qty, price },
//       { new: true } // Return the updated product
//     );

//     if (!product) {
//       return sendFailureResponse(res, 'Product not found', 404);
//     }

//     return sendSuccessResponse(res, 'Product updated successfully', product);
//   } catch (error) {
//     console.error(error);
//     return sendFailureResponse(res, 'Internal server error', 500);
//   }
// };

// Delete a product by ID
const deletePortfolio = async (req, res) => {
  try {
    const portfolioId = req.params.id;

    // Find the product by ID and remove it
    const portfolio = await Portfolio.findByIdAndRemove(portfolioId);

    if (!portfolio) {
      return sendFailureResponse(res, 'Portfolio not found', 404);
    }

    return sendSuccessResponse(res, 'Portfolio deleted successfully');
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};


module.exports = {
  createPortfolio,
  getPortfolioByIdOrAll,
  // editProduct,
  deletePortfolio
};
