const mongoose = require('mongoose');

const BlogPostSchema = mongoose.Schema({
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
