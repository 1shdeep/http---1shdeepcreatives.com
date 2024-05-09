const express = require('express');
const portfolioRouter = require('./routes/portfolio');
const testimonialsRouter = require('./routes/testimonials');
const clientRouter = require('./routes/client');
const adminRouter = require('./routes/admin');
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
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/client', clientRouter);
app.use('/api/admin', adminRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
