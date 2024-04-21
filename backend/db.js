const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/your_database_name';

async function connectToDb(){

    // Connect to MongoDB
await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to know when we're connected)
db.once('open', function() {
  console.log("Connected to MongoDB successfully!");
});


}



module.exports = connectToDb;
