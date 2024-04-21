const express = require('express');
const app = express();
const PORT = process.env.PORT || 6900; // Using the PORT variable
const bodyParser = require('body-parser');

const connectToDb = require('./db');

connectToDb();

app.use(bodyParser.json());

app.use('/', require('./Routers/Router'));

app.listen(PORT, () => { // Using the PORT variable
    console.log('Listening on port', PORT); // Logging the port number
});
