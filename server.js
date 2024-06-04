const express = require('express');
const productRouter = require('./routes/product');
const portfolioRouter = require('./routes/portfolio');
const stockRouter = require('./routes/stock');
const connectDB = require('./db');
const cors = require('cors'); 
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3001;

connectDB(); 
app.use(express.json());

// Configure CORS middleware
app.use(cors()); // Allow all CORS requests by default

app.use('/api/portfolio', portfolioRouter);
app.use('/api/product', productRouter);
app.use('/api/stock', stockRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
