const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const hireRoutes = require('./routes/HireRoutes');

// Load environment variables
require('dotenv').config();

// Set up Express app
const app = express();
const port = 5000;

// Set up CORS
app.use(cors());

// Set up body parsing
app.use(bodyParser.json());

// Use routes
app.use('/api/hire', hireRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
