const mongoose = require("mongoose")
require('dotenv').config();

const connection = mongoose.connect('mongodb+srv://numetry:numetry@cluster0.2ba9eik.mongodb.net/Products?retryWrites=true&w=majority')

module.exports = {
    connection
}