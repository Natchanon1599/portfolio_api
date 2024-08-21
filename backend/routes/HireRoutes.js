const express = require('express');
const router = express.Router();
const db = require('../db'); // Ensure this path is correct

// POST route for submitting the hire form
router.post('/', async (req, res) => {
    try {
        const { name, company, email, message } = req.body;

        // Validate input
        if (!name || !company || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create new hire record
        const query = 'INSERT INTO hires (name, company, email, message) VALUES (?, ?, ?, ?)';
        db.query(query, [name, company, email, message], (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'An error occurred' });
            }
            res.status(201).json({ message: 'Form submitted successfully!' });
        });
    } catch (error) {
        console.error('Error creating hire:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
