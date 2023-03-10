require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const PORT = process.env.PORT || 8080;
const ClassifiedRoute = require('./src/features/product/product.route')

const app = express();
app.use(cors());
app.use(express.json());



app.get("/", async (req, res) => {
    res.send("Hello")
})
app.use("/classified", ClassifiedRoute)

app.listen(PORT, async (req, res) => {
    try {
        await connect();
        console.log(`http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
})