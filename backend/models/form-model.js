const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({

    name: String,
    Comment:String

});

const formModel = new mongoose.Model("form",formSchema);


module.exports = formModel;