const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String
  },
  imageUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
  about: {
    type: String
  },
},{
  timestamps: true,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
