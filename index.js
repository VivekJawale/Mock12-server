require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/congif/db");
const PORT = process.env.PORT || 8080;


const app = express();
app.use(cors());
app.use(express.json());



app.get("/", async (req, res) => {
    res.send("Hello")
})
app.get("/api", async (req, res) => {
    res.send("Hello to the api")
})


app.listen(PORT, async (req, res) => {
    try {
        await connect();
        console.log(`http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
})