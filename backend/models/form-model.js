const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: String,
    comment: String // Changed field name to lowercase
});

const Form = mongoose.model("Form", formSchema); // Changed model name to PascalCase

module.exports = Form;
