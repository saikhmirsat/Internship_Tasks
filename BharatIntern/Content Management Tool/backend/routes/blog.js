const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Create a new blog post
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const newBlogPost = new BlogPost({ title, content });

    try {
        await newBlogPost.save();
        res.status(201).json({ message: "Blog post created successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while saving the blog post" });
    }
});

// Fetch all blog posts
router.get('/', async (req, res) => {
    try {
        const data = await BlogPost.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching blog posts" });
    }
});

module.exports = router;
