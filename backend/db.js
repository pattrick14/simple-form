const mongoose = require('mongoose');

async function connectToDb() {
    try {
        const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';

        console.log("Connecting to MongoDB...");

        // Connect to MongoDB
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToDb;
