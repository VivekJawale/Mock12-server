const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        category: String,
        image: String,
        postedAt: Date,
        price: String,
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = Product = mongoose.model("product", productSchema)