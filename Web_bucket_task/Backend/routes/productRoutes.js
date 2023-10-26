const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// Create a new product
router.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ status: true, msg: "Added successfully", product });
    } catch (error) {
        res.status(500).json({ status: false, error: "Failed to create a new product." });
    }
});

// Read all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ status: false, error: "Failed to fetch products." });
    }
});

// Read a product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ status: false, error: "Product not found." });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ status: false, error: "Failed to fetch the product." });
    }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!product) {
            return res.status(404).json({ status: false, error: "Product not found." });
        }
        res.status(200).json({ status: true, msg: "Updated successfully", product });
    } catch (error) {
        res.status(500).json({ status: false, error: "Failed to update the product." });
    }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ status: false, error: "Product not found." });
        }
        res.status(200).json({ status: true, msg: "Deleted successfully", product });
    } catch (error) {
        res.status(500).json({ status: false, error: "Failed to delete the product." });
    }
});

module.exports = router;
