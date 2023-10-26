const express = require("express");

const { connection } = require('./Config/db')
require('dotenv').config();
const cors = require("cors")
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes);

const port = process.env.PORT
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    try {
        console.log('db is connected')
        await connection

    } catch (err) {
        console.log('db is not connected')
    }
});
