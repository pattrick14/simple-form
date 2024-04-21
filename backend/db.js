const mongoose = require('mongoose');

async function connectToDb() {
    try {
        const url = 'mongodb+srv://NearbyKart_production:vgDxWwhHwhdWkSO0@cluster0.nkwn8jm.mongodb.net';

        console.log("Connecting to MongoDB...");

        // Connect to MongoDB
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToDb;
