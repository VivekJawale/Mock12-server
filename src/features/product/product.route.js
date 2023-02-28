const express = require("express");
const Product = require("./product.model");
const app = express.Router();

app.get("", async (req, res) => {
    const { category, dSort, input, page = 1, limit = 4 } = req.query;
    try {
        if (dSort && category) {
            if (dSort === "asc" && category) {
                const product = await Product.find({ category }).sort({ postedAt: 1 })
                    .skip((page - 1) * limit)
                    .limit(limit);
                return res.status(200).send(product);
            } else if (dSort === "desc" && category) {
                const product = await Product.find({ category }).sort({ postedAt: -1 })
                    .skip((page - 1) * limit)
                    .limit(limit);;
                return res.status(200).send(product);
            }
        } else if (category) {
            let product = await Product.find({ category })
                .skip((page - 1) * limit)
                .limit(limit);
            return res.status(200).send(product);
        } else if (input) {
            let temp = new RegExp(input, "i");
            let product = await Product.find({ name: temp })
                .skip((page - 1) * limit)
                .limit(limit);
            return res.status(200).send(product);
        } else if (dSort) {
            if (dSort == "asc") {
                let product = await Product.find().sort({ postedAt: 1 })
                    .skip((page - 1) * limit)
                    .limit(limit);
                return res.status(200).send(product);
            } else if (dSort == "desc") {
                let product = await Product.find().sort({ postedAt: -1 })
                    .skip((page - 1) * limit)
                    .limit(limit);
                return res.status(200).send(product);
            }
        } else {
            let product = await Product.find()
                .skip((page - 1) * limit)
                .limit(limit);
            return res.status(200).send(product);
        }
    } catch (error) {
        res.status(500).send({ msg: `${error.message}` });
    }
});

app.post("", async (req, res) => {
    try {
        let data = new Product(req.body);
        await data.save();
        res.status(200).send({ msg: "Product saved successfully" });
    } catch (error) {
        res.status(500).send({ msg: `${error.message}` });
    }
});


app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let product = await Product.findByIdAndDelete({ _id: id });
        // console.log(product)
        if (product) {
            return res.status(200).send({ msg: `Product has been deleted successfully` })
        } else {
            return res.status(404).send({ msg: `something went wrong` })
        }
    } catch (error) {
        res.status(500).send({ msg: `${error.message}` });
    }
})
module.exports = app;
