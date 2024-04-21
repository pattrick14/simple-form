const express = require('express');
const router = express.Router();

const Form = require('../models/form-model');



router.post('/details', async (req, res) => {
    // Get details
    const { name, comment } = req.body;

    try {
        // Create a new document
        const newData = await Form.create({ name, comment });
        console.log(newData);
        res.json({ message: "OK" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed" });
    }
});

router.get('/comments', async (req, res) => {
    try {
        // Find all documents in the collection
        const response = await Form.find({});
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed" });
    }
});

module.exports = router;
